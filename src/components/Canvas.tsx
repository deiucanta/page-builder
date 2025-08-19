'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Minus, MousePointer, Plus } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

type ViewportOption = {
  name: string
  width: number
}

const VIEWPORTS: ViewportOption[] = [
  { name: 'Mobile (375px)', width: 375 },
  { name: 'Tablet (768px)', width: 768 },
  { name: 'Desktop (1280px)', width: 1280 },
  { name: 'Large Desktop (1920px)', width: 1920 },
]

const DEFAULT_VIEWPORT = VIEWPORTS[2]
const MIN_ZOOM = 0.1
const MAX_ZOOM = 1
const ZOOM_STEP = 0.1

interface CanvasProps {
  url: string
  className?: string
  iframeRef: React.RefObject<HTMLIFrameElement | null>
  selectedNodeId?: string
  onSelect?: (nodeId: string) => void
}

export default function Canvas({
  url,
  className,
  iframeRef,
  selectedNodeId,
  onSelect,
}: CanvasProps) {
  const [selectedViewport, setSelectedViewport] = useState<ViewportOption | undefined>(
    DEFAULT_VIEWPORT,
  )
  const [zoomLevel, setZoomLevel] = useState(1)
  const [maxZoom, setMaxZoom] = useState(MAX_ZOOM)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [inspectMode, setInspectMode] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayId = 'selected-block-overlay'
  const hoverOverlayId = 'hover-block-overlay'

  const updateContainerSize = useCallback(() => {
    if (!containerRef.current) return

    const { offsetWidth, offsetHeight } = containerRef.current
    setContainerSize({ width: offsetWidth, height: offsetHeight })
  }, [])

  const calculateMaxZoom = useCallback(() => {
    if (!containerRef.current || !selectedViewport) return

    const containerWidth = containerRef.current.offsetWidth
    const viewportWidth = selectedViewport.width

    // Calculate how much we can zoom without overflow
    const calculatedMaxZoom = containerWidth / viewportWidth

    // If we can show at 100% or more, cap at 1, otherwise use the calculated value
    const newMaxZoom = Math.min(calculatedMaxZoom, MAX_ZOOM)

    setMaxZoom(newMaxZoom)

    return newMaxZoom
  }, [selectedViewport])

  // Adjust zoom when viewport changes or container is resized
  const updateZoomLevel = useCallback(() => {
    updateContainerSize()
    const newMaxZoom = calculateMaxZoom()
    if (!newMaxZoom) return

    // When container size allows 100%, use 100%
    if (newMaxZoom >= 1) {
      setZoomLevel(1)
    } else {
      // Otherwise use the maximum possible zoom
      setZoomLevel(newMaxZoom)
    }
  }, [calculateMaxZoom, updateContainerSize])

  // Recalculate on viewport change
  useEffect(() => {
    if (selectedViewport) {
      // Use timeout to ensure the containerRef is available after viewport change
      setTimeout(updateZoomLevel, 0)
    }
  }, [selectedViewport, updateZoomLevel])

  // Set up resize observer to watch container size changes
  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      updateZoomLevel()
    })

    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [updateZoomLevel])

  // Also watch window resize as fallback
  useEffect(() => {
    window.addEventListener('resize', updateZoomLevel)
    return () => {
      window.removeEventListener('resize', updateZoomLevel)
    }
  }, [updateZoomLevel])

  // Initial size measurement
  useEffect(() => {
    updateContainerSize()
  }, [updateContainerSize])

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + ZOOM_STEP, maxZoom))
  }, [maxZoom])

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM))
  }, [])

  const handleViewportChange = useCallback((value: string) => {
    const viewport = VIEWPORTS.find((v) => v.name === value)
    if (viewport) {
      setSelectedViewport(viewport)
    }
  }, [])

  // Inject overlay div for selected node when it changes
  useEffect(() => {
    if (!iframeRef.current) return

    const showOverlayAndScroll = () => {
      const iframeDocument = iframeRef.current?.contentDocument
      if (!iframeDocument) return

      // Remove any existing overlay
      const existingOverlay = iframeDocument.getElementById(overlayId)
      if (existingOverlay) {
        existingOverlay.remove()
      }

      // If no node is selected, don't create a new overlay
      if (!selectedNodeId) return

      // Find the selected element
      const selectedElement = iframeDocument.querySelector(`[data-block-id="${selectedNodeId}"]`)
      if (!selectedElement) return

      // Scroll to the selected element with smart positioning
      // Use 'nearest' for block to avoid forcing centering when not possible
      selectedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      })

      // Wait a bit for scroll to start, then create overlay
      setTimeout(() => {
        // Get scroll offsets after scrolling
        const scrollTop = iframeDocument.documentElement.scrollTop || iframeDocument.body.scrollTop
        const scrollLeft =
          iframeDocument.documentElement.scrollLeft || iframeDocument.body.scrollLeft

        // Create and position overlay
        const overlay = iframeDocument.createElement('div')
        overlay.id = overlayId

        const rect = selectedElement.getBoundingClientRect()

        Object.assign(overlay.style, {
          position: 'absolute',
          top: `${rect.top + scrollTop}px`,
          left: `${rect.left + scrollLeft}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          backgroundColor: 'rgba(59, 130, 246, 0.4)',
          pointerEvents: 'none',
          zIndex: '9999',
          transition: 'opacity 0.3s ease-out',
          border: '2px solid rgba(59, 130, 246, 0.7)',
        })

        iframeDocument.body.appendChild(overlay)

        // Remove overlay after 2 seconds
        setTimeout(() => {
          overlay.style.opacity = '0'
          setTimeout(() => {
            overlay?.remove()
          }, 300) // additional time for fade out animation
        }, 700)
      }, 100) // Small delay to allow scroll to start
    }

    // If iframe already loaded
    if (iframeRef.current.contentDocument?.readyState === 'complete') {
      showOverlayAndScroll()
    }

    // Setup listener for iframe load
    const handleIframeLoad = () => {
      showOverlayAndScroll()
    }

    iframeRef.current.addEventListener('load', handleIframeLoad)

    return () => {
      iframeRef.current?.removeEventListener('load', handleIframeLoad)
    }
  }, [selectedNodeId, iframeRef])

  // Handle inspect mode
  useEffect(() => {
    if (!iframeRef.current || !inspectMode) return

    const iframeDocument = iframeRef.current.contentDocument
    if (!iframeDocument) return

    const createHoverOverlay = (targetElement: Element) => {
      // Remove existing hover overlay
      const existingHoverOverlay = iframeDocument.getElementById(hoverOverlayId)
      if (existingHoverOverlay) {
        existingHoverOverlay.remove()
      }

      // Get scroll offsets
      const scrollTop = iframeDocument.documentElement.scrollTop || iframeDocument.body.scrollTop
      const scrollLeft = iframeDocument.documentElement.scrollLeft || iframeDocument.body.scrollLeft

      const rect = targetElement.getBoundingClientRect()

      // Create overlay
      const hoverOverlay = iframeDocument.createElement('div')
      hoverOverlay.id = hoverOverlayId

      Object.assign(hoverOverlay.style, {
        position: 'absolute',
        top: `${rect.top + scrollTop}px`,
        left: `${rect.left + scrollLeft}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        pointerEvents: 'none',
        zIndex: '9998',
        border: '2px solid rgba(59, 130, 246, 0.6)',
      })

      iframeDocument.body.appendChild(hoverOverlay)
    }

    const removeHoverOverlay = () => {
      const existingHoverOverlay = iframeDocument.getElementById(hoverOverlayId)
      if (existingHoverOverlay) {
        existingHoverOverlay.remove()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!inspectMode) return

      // Get element under cursor
      const element = iframeDocument.elementFromPoint(e.clientX, e.clientY)
      if (!element) return

      // Find closest element with data-block-id
      const targetElement = element.closest('[data-block-id]')
      if (!targetElement) {
        removeHoverOverlay()
        return
      }

      createHoverOverlay(targetElement)
    }

    const handleClick = (e: MouseEvent) => {
      if (!inspectMode) return

      // Prevent default browser behavior when in inspect mode
      e.preventDefault()

      // Get element under cursor
      const element = iframeDocument.elementFromPoint(e.clientX, e.clientY)
      if (!element) return

      // Find closest element with data-block-id
      const targetElement = element.closest('[data-block-id]')
      if (!targetElement) return

      const blockId = targetElement.getAttribute('data-block-id')
      if (blockId && onSelect) {
        onSelect(blockId)
        setInspectMode(false)
      }
    }

    // Add event listeners
    iframeDocument.addEventListener('mousemove', handleMouseMove)
    iframeDocument.addEventListener('click', handleClick)

    return () => {
      // Cleanup event listeners
      iframeDocument.removeEventListener('mousemove', handleMouseMove)
      iframeDocument.removeEventListener('click', handleClick)
      removeHoverOverlay()
    }
  }, [inspectMode, iframeRef, onSelect])

  const toggleInspectMode = useCallback(() => {
    setInspectMode((prev) => !prev)
  }, [])

  if (!selectedViewport) return null

  return (
    <div className={cn('border flex flex-col h-full', className)}>
      <div className="flex justify-between items-center p-2">
        <div>
          <Select value={selectedViewport.name} onValueChange={handleViewportChange}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select viewport" />
            </SelectTrigger>
            <SelectContent>
              {VIEWPORTS.map((viewport) => (
                <SelectItem key={viewport.name} value={viewport.name}>
                  {viewport.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={inspectMode ? 'default' : 'outline'}
            size="icon"
            onClick={toggleInspectMode}
            title="Select to inspect"
            className={inspectMode ? 'bg-blue-500 text-white' : ''}
          >
            <MousePointer className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomOut}
            disabled={zoomLevel <= MIN_ZOOM}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
          <Button
            variant="outline"
            size="icon"
            onClick={handleZoomIn}
            disabled={zoomLevel >= maxZoom}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div ref={containerRef} className="relative border overflow-hidden flex-1">
        <div
          style={{
            width: selectedViewport.width,
            height: containerSize.height / zoomLevel,
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top left',
          }}
          className="mx-auto"
        >
          <iframe ref={iframeRef} src={url} className="border-0 w-full h-full" title="Preview" />
        </div>
      </div>
    </div>
  )
}

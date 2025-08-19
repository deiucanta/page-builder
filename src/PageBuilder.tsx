'use client'

import { BlockEditor } from '@/components/BlockEditor'
import Canvas from '@/components/Canvas'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronDownIcon, ChevronUpIcon, EllipsisVerticalIcon, MinusIcon } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import { NodeRendererProps, Tree, TreeApi } from 'react-arborist'
import useResizeObserver from 'use-resize-observer'
import {
  createStoreAndHistory,
  StoreHistoryProvider,
  StoreProvider,
  useStore,
  useStoreHistory,
} from '@/store'
import { startCase } from 'lodash'
import { BlockSnapshotIn } from '@/store/Block'

export interface PageBuilderProps {
  blocks: any[] // Raw block definitions
  initialData?: any
  onDataChange?: (data: any) => void
  onSave?: (data: any) => Promise<void>
  onPublish?: (data: any) => Promise<void>
  previewUrl?: string
  saving?: boolean
  className?: string
}

export const PageBuilder = ({
  blocks,
  initialData,
  onDataChange,
  onSave,
  onPublish,
  previewUrl,
  saving = false,
  className,
}: PageBuilderProps) => {
  const [{ store, history }] = useState(() => createStoreAndHistory(blocks))
  
  useEffect(() => {
    if (initialData) {
      store.setData(initialData)
    }
  }, [initialData, store])

  useEffect(() => {
    if (onDataChange) {
      onDataChange(store.data)
    }
  }, [store.data, onDataChange])

  return (
    <StoreProvider value={store}>
      <StoreHistoryProvider value={history}>
        <PageBuilderInner
          onSave={onSave}
          onPublish={onPublish}
          previewUrl={previewUrl}
          saving={saving}
          className={className}
        />
      </StoreHistoryProvider>
    </StoreProvider>
  )
}

const PageBuilderInner = observer(({
  onSave,
  onPublish,
  previewUrl,
  saving,
  className,
}: Omit<PageBuilderProps, 'blocks' | 'initialData' | 'onDataChange'>) => {
  const store = useStore()
  const treeRef = useRef<TreeApi<any>>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const treeContainer = useResizeObserver()

  useEffect(() => {
    if (!treeRef.current) return
    if (!store.selectedNode) return
    treeRef.current.select(store.selectedNode.id)
  }, [store.selectedNode])

  const selectedNodeId = store.selectedNode?.id

  const handleSave = async () => {
    if (onSave) {
      await onSave(store.data)
      iframeRef.current?.contentWindow?.postMessage('router-refresh', '*')
    }
  }

  const handlePublish = async () => {
    if (onPublish) {
      await onPublish(store.data)
    }
  }

  return (
    <div className={cn("h-screen flex", className)}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-2 border-b">
          <History />
          {saving && <div>saving</div>}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVerticalIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
              {onSave && (
                <DropdownMenuItem onClick={handleSave}>
                  Save
                </DropdownMenuItem>
              )}
              {onPublish && (
                <DropdownMenuItem onClick={handlePublish}>
                  Publish
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={async (e) => {
                  e.stopPropagation()
                  store.pasteNode()
                }}
              >
                Paste
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Add Block</DropdownMenuLabel>
              {store.blocks.map((block) => (
                <DropdownMenuItem
                  key={block.type}
                  onClick={(e) => {
                    e.stopPropagation()
                    store.createNode('root', 0, block.type)
                  }}
                >
                  {startCase(block.type)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div ref={treeContainer.ref} className="flex-1 min-h-0">
          <Tree
            rowHeight={40}
            width={treeContainer.width}
            height={treeContainer.height}
            ref={treeRef}
            data={store.data}
            initialOpenState={store.openMap}
            onMove={({ dragIds, parentId, index }) => {
              store.moveNodes(parentId, index, dragIds)
            }}
            onDelete={({ ids }) => {
              store.deleteNodes(ids)
            }}
            onSelect={(nodes) => {
              const ids = nodes.map((node) => node.id)
              if (ids.length === 1 && ids[0]) {
                store.selectNode(ids[0])
              }
            }}
            onToggle={(id) => {
              const node = store.findNode(id)
              if (!node) return
              node.toggle()
            }}
            selectionFollowsFocus
            children={NodeRenderer}
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        {previewUrl && (
          <Canvas
            iframeRef={iframeRef}
            url={previewUrl}
            selectedNodeId={selectedNodeId}
            onSelect={(id) => store.selectNode(id)}
          />
        )}
      </div>
      <div className="w-[300px] p-4 overflow-auto">
        <BlockEditor />
      </div>
    </div>
  )
})

const History = observer(() => {
  const history = useStoreHistory()
  return (
    <div className="flex gap-2">
      <Button onClick={() => history.undo()} disabled={!history.canUndo}>
        Undo
      </Button>
      <Button onClick={() => history.redo()} disabled={!history.canRedo}>
        Redo
      </Button>
    </div>
  )
})

const NodeRenderer = ({ node, style, dragHandle }: NodeRendererProps<any>) => {
  const store = useStore()
  const [open, setOpen] = useState(false)

  return (
    <div
      style={style}
      ref={dragHandle}
      className={cn(
        'h-full flex items-center group',
        node.isSelected && 'bg-blue-500 hover:bg-blue-400',
        !node.isSelected && 'bg-gray-50 hover:bg-gray-100',
      )}
    >
      <Button
        disabled={node.children?.length === 0}
        variant="ghost"
        size="icon"
        className="bg-transparent hover:bg-transparent"
        onClick={(e) => {
          e.stopPropagation()
          node.toggle()
        }}
      >
        <>
          {node.children?.length === 0 ? (
            <MinusIcon className="w-4 h-4" />
          ) : node.isClosed ? (
            <ChevronDownIcon className="w-4 h-4" />
          ) : (
            <ChevronUpIcon className="w-4 h-4" />
          )}
        </>
      </Button>

      <div className="flex-1">{node.data.name}</div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn('opacity-0 group-hover:opacity-100 transition', open && 'opacity-100')}
          >
            <EllipsisVerticalIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation()
              store.copyNode(node.id)
              setOpen(false)
            }}
          >
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={async (e) => {
              e.stopPropagation()
              store.pasteNode(node.id)
              setOpen(false)
            }}
          >
            Paste
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation()
              store.duplicateNode(node.id)
            }}
          >
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation()
              store.deleteNodes([node.id])
            }}
          >
            Delete
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Add Block</DropdownMenuLabel>
          {store.blocks.map((block) => (
            <DropdownMenuItem
              key={block.type}
              onClick={(e) => {
                e.stopPropagation()
                store.createNode(node.id, 0, block.type)
              }}
            >
              {startCase(block.type)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
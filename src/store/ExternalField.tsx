import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { useStoreHistory } from '.'
import { Node } from './Node'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState, useEffect, useId, useRef } from 'react'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'

export const ExternalField = types
  .model('ExternalField', {
    name: types.identifier,
    type: types.literal('external'),
    defaultValue: types.optional(types.string, ''),
    endpoint: types.string,
  })
  .views((self) => ({
    getValue: (node: Instance<typeof Node>, path: string[]) => {
      return (node.getPropValue(path) as string) ?? self.defaultValue
    },
  }))
  .actions((self) => ({
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => {
      node.setPropValue(path, value)
    },
  }))

interface ExternalItem {
  id: string
  label: string
}

interface ExternalResponse {
  results: ExternalItem[]
  pagination: {
    page: number
    pageSize: number
    totalCount: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

export const ExternalFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof ExternalField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const history = useStoreHistory()
    const id = useId()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const value = field.getValue(node, [...path, field.name])
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingSelected, setIsLoadingSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState<ExternalItem | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [page, setPage] = useState(1)
    const pageSize = 10
    const [response, setResponse] = useState<ExternalResponse>({
      results: [],
      pagination: {
        page: 1,
        pageSize,
        totalCount: 0,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    })

    // Computed values
    const items = response.results || []
    const pagination = response.pagination
    const hasNextPage = pagination.hasNextPage
    const hasPrevPage = pagination.hasPreviousPage
    const totalPages = pagination.totalPages
    const totalCount = pagination.totalCount

    // Fetch selected item by ID
    const fetchSelectedItem = async (itemId: string) => {
      if (!itemId) {
        setSelectedItem(null)
        return
      }

      try {
        setIsLoadingSelected(true)
        const url = new URL(field.endpoint, window.location.origin)
        url.searchParams.set('id', itemId)

        const response = await fetch(url.toString())

        if (!response.ok) {
          console.error('Failed to fetch selected item')
          setSelectedItem(null)
          return
        }

        const data: ExternalResponse = await response.json()
        if (data.results && data.results.length > 0) {
          setSelectedItem(data.results[0] || null)
        } else {
          setSelectedItem(null)
        }
      } catch (error) {
        console.error('Error fetching selected item:', error)
        setSelectedItem(null)
      } finally {
        setIsLoadingSelected(false)
      }
    }

    // Fetch selected item when component loads or value changes
    useEffect(() => {
      if (value) {
        fetchSelectedItem(value)
      } else {
        setSelectedItem(null)
      }
    }, [value, field.endpoint])

    const fetchItems = async (searchTerm?: string, pageNum = 1) => {
      try {
        setIsLoading(true)

        const url = new URL(field.endpoint, window.location.origin)
        url.searchParams.set('page', pageNum.toString())
        url.searchParams.set('pageSize', pageSize.toString())

        if (searchTerm) {
          url.searchParams.set('search', searchTerm)
        }

        const response = await fetch(url.toString())

        if (!response.ok) {
          throw new Error('Failed to fetch items')
        }

        const data: ExternalResponse = await response.json()
        setResponse(data)
      } catch (error) {
        console.error('Error fetching items:', error)
        setResponse({
          results: [],
          pagination: {
            page: 1,
            pageSize: 50,
            totalCount: 0,
            totalPages: 1,
            hasNextPage: false,
            hasPreviousPage: false,
          },
        })
      } finally {
        setIsLoading(false)
      }
    }

    // Handle search query changes with debounce
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearch(searchQuery)
        setPage(1) // Reset to first page when search changes
      }, 300)

      return () => clearTimeout(timer)
    }, [searchQuery])

    // Fetch items when dialog opens or search/page changes
    useEffect(() => {
      if (open) {
        fetchItems(debouncedSearch, page)
      }
    }, [open, debouncedSearch, page, field.endpoint])

    const handleSelectItem = (item: ExternalItem) => {
      field.setValue(node, [...path, field.name], item.id)
      setSelectedItem(item)
      setOpen(false)
    }

    const goToNextPage = () => {
      if (hasNextPage) {
        setPage((prevPage) => prevPage + 1)
      }
    }

    const goToPrevPage = () => {
      if (hasPrevPage) {
        setPage((prevPage) => prevPage - 1)
      }
    }

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id} onClick={() => buttonRef.current?.click()} className="cursor-pointer">
          {startCase(field.name)}
        </Label>
        <div className="flex gap-2">
          <Input
            id={id}
            value={value}
            onChange={(e) => field.setValue(node, [...path, field.name], e.target.value)}
            onFocus={() => history.startGroup(() => {})}
            onBlur={() => history.stopGroup()}
            className="flex-1"
            placeholder="Item ID"
          />
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button ref={buttonRef} type="button" variant="outline" size="sm">
                Select
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[680px] h-[80vh] flex flex-col">
              <DialogHeader className="shrink-0">
                <DialogTitle>Select Item</DialogTitle>
              </DialogHeader>

              <div className="shrink-0 mb-4">
                <Input
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {isLoading ? (
                <div className="flex-1 flex items-center justify-center">Loading items...</div>
              ) : (
                <>
                  <div className="flex-1 space-y-2 overflow-y-auto min-h-0">
                    {items.length > 0 ? (
                      items.map((item) => (
                        <div
                          key={item.id}
                          className={`border rounded-md p-3 cursor-pointer hover:border-primary transition-colors ${value === item.id ? 'border-primary ring-1 ring-primary bg-primary/5' : ''}`}
                          onClick={() => handleSelectItem(item)}
                        >
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.id}</div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        No items found
                      </div>
                    )}
                  </div>

                  {(hasNextPage || hasPrevPage) && (
                    <div className="shrink-0 flex items-center justify-between mt-4 pt-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPrevPage}
                        disabled={!hasPrevPage}
                      >
                        Previous
                      </Button>

                      <span className="text-sm text-muted-foreground">
                        Page {page} of {totalPages} ({totalCount} items)
                      </span>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToNextPage}
                        disabled={!hasNextPage}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
        {value && (
          <div className="mt-1 border rounded p-2 bg-muted/50">
            {isLoadingSelected ? (
              <div className="text-sm text-muted-foreground">Loading item...</div>
            ) : selectedItem ? (
              <div className="text-sm">
                <div className="font-medium">{selectedItem.label}</div>
                <div className="text-xs text-muted-foreground">{selectedItem.id}</div>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">Item not found</div>
            )}
          </div>
        )}
      </div>
    )
  },
)

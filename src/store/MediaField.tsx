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
import { useState, useId } from 'react'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'

export const MediaField = types
  .model('MediaField', {
    name: types.identifier,
    type: types.literal('media'),
    defaultValue: types.optional(types.string, ''),
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

export const MediaFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof MediaField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const history = useStoreHistory()
    const fullPath = [...path, field.name]
    const value = field.getValue(node, fullPath)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [inputValue, setInputValue] = useState(value || '')
    const id = useId()

    const handleUrlSubmit = () => {
      history.withoutUndo(() => {
        field.setValue(node, fullPath, inputValue)
      })
      setDialogOpen(false)
    }

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{startCase(field.name)}</Label>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              {value ? 'Change Media' : 'Select Media'}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl h-[80vh]">
            <DialogHeader>
              <DialogTitle>Enter Media URL</DialogTitle>
            </DialogHeader>
            <div className="flex gap-2 p-4">
              <Input
                type="url"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter image or media URL"
                className="flex-1"
              />
              <Button onClick={handleUrlSubmit}>Set Media</Button>
            </div>
            {inputValue && (
              <div className="p-4">
                <img 
                  src={inputValue} 
                  alt="Preview" 
                  className="max-w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
        {value && (
          <div className="mt-2">
            <img 
              src={value} 
              alt="Selected media" 
              className="max-w-full h-auto max-h-32 object-contain"
            />
          </div>
        )}
      </div>
    )
  },
)
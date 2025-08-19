import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { useStoreHistory } from '.'
import { Node } from './Node'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'
import { useId, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ExpandIcon } from 'lucide-react'

export const TextareaField = types
  .model('TextareaField', {
    name: types.identifier,
    type: types.literal('textarea'),
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

export const TextareaFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof TextareaField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const history = useStoreHistory()
    const fullPath = [...path, field.name]
    const value = field.getValue(node, fullPath)
    const id = useId()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogValue, setDialogValue] = useState(value)

    const handleChange = (newValue: string) => {
      history.withoutUndo(() => {
        field.setValue(node, fullPath, newValue)
      })
    }

    const handleDialogSave = () => {
      handleChange(dialogValue)
      setDialogOpen(false)
    }

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor={id}>{startCase(field.name)}</Label>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost" className="h-6 w-6">
                <ExpandIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{startCase(field.name)}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <Textarea
                  value={dialogValue}
                  onChange={(e) => setDialogValue(e.target.value)}
                  className="min-h-[400px] font-mono"
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleDialogSave}>Save</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Textarea
          id={id}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="min-h-[100px]"
        />
      </div>
    )
  },
)
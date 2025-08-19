import { Node } from '@/store/Node'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'
import { useId } from 'react'

export const SelectField = types
  .model('SelectField', {
    name: types.identifier,
    type: types.literal('select'),
    defaultValue: types.optional(types.string, ''),
    options: types.array(types.model({ label: types.string, value: types.string })),
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

export const SelectFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof SelectField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const id = useId()
    const value = field.getValue(node, [...path, field.name])
    const label = field.options.find((option) => option.value === value)?.label
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{startCase(field.name)}</Label>
        <Select
          value={value}
          onValueChange={(value) => field.setValue(node, [...path, field.name], value)}
        >
          <SelectTrigger id={id}>{label}</SelectTrigger>
          <SelectContent>
            {field.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  },
)

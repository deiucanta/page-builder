import { Node } from '@/store/Node'
import { Checkbox } from '@/components/ui/checkbox'
import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'
import { useId } from 'react'

export const CheckboxField = types
  .model('CheckboxField', {
    name: types.identifier,
    type: types.literal('checkbox'),
    defaultValue: types.optional(types.boolean, false),
  })
  .views((self) => ({
    getValue: (node: Instance<typeof Node>, path: string[]) => {
      return (node.getPropValue(path) as boolean) ?? self.defaultValue
    },
  }))
  .actions((self) => ({
    setValue: (node: Instance<typeof Node>, path: string[], value: boolean) => {
      node.setPropValue(path, value)
    },
  }))

export const CheckboxFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof CheckboxField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const id = useId()
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          id={id}
          checked={field.getValue(node, [...path, field.name])}
          onCheckedChange={(checked) =>
            field.setValue(node, [...path, field.name], Boolean(checked))
          }
        />
        <Label htmlFor={id}>{startCase(field.name)}</Label>
      </div>
    )
  },
)

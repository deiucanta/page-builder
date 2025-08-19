import { Input } from '@/components/ui/input'
import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { useStoreHistory } from '.'
import { Node } from './Node'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'
import { useId } from 'react'

export const NumberField = types
  .model('NumberField', {
    name: types.identifier,
    type: types.literal('number'),
    defaultValue: types.optional(types.number, 0),
  })
  .views((self) => ({
    getValue: (node: Instance<typeof Node>, path: string[]) => {
      return (node.getPropValue(path) as number) ?? self.defaultValue
    },
  }))
  .actions((self) => ({
    setValue: (node: Instance<typeof Node>, path: string[], value: number) => {
      node.setPropValue(path, value)
    },
  }))

export const NumberFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof NumberField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const id = useId()
    const history = useStoreHistory()
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{startCase(field.name)}</Label>
        <Input
          id={id}
          type="number"
          value={field.getValue(node, [...path, field.name])}
          onChange={(e) => field.setValue(node, [...path, field.name], e.target.valueAsNumber)}
          onFocus={() => history.startGroup(() => {})}
          onBlur={() => history.stopGroup()}
        />
      </div>
    )
  },
)

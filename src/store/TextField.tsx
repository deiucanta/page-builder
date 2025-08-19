import { Input } from '@/components/ui/input'
import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { useStoreHistory } from '.'
import { Node } from './Node'
import { Label } from '@/components/ui/label'
// start case
import { startCase } from 'lodash'
import { useId } from 'react'

export const TextField = types
  .model('TextField', {
    name: types.identifier,
    type: types.literal('text'),
    defaultValue: types.optional(types.string, ''),
  })
  .views((self) => ({
    getValue: (node: Instance<typeof Node>, path: string[]) => {
      return (node.getPropValue(path) as string) ?? self.defaultValue
    },
  }))
  .actions((self) => ({
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => {
      console.log('setValue', path, value)
      node.setPropValue(path, value)
    },
  }))

export const TextFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof TextField>
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
          value={field.getValue(node, [...path, field.name])}
          onChange={(e) => field.setValue(node, [...path, field.name], e.target.value)}
          onFocus={() => history.startGroup(() => {})}
          onBlur={() => history.stopGroup()}
        />
      </div>
    )
  },
)

'use client'
import { Input } from '@/components/ui/input'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { FieldComponent } from '@/store/Field'
import { Label } from '@/components/ui/label'
import { startCase } from 'lodash'

export const BlockEditor = observer(() => {
  const store = useStore()
  const node = store.selectedNode
  const component = store.selectedBlock
  if (!node || !component) return null

  return (
    <div key={node.id} className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">{startCase(component.type)}</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="block-name">Block Name</Label>
        <Input
          id="block-name"
          value={node.name}
          onChange={(e) => store.renameNode(node.id, e.target.value)}
        />
      </div>
      <hr />
      {component.fields.map((field) => (
        <FieldComponent key={field.name} field={field} node={node} path={[]} />
      ))}
    </div>
  )
})

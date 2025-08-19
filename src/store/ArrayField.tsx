import { JsonValue } from '@/store/JsonValue'
import { Node } from '@/store/Node'
import { Button } from '@/components/ui/button'
import { observer } from 'mobx-react-lite'
import { IAnyType, Instance, types } from 'mobx-state-tree'
import { Field, FieldComponent } from './Field'
import { startCase } from 'lodash'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

export const ArrayField = types
  .model('ArrayField', {
    name: types.identifier,
    type: types.literal('array'),
    fields: types.array(types.late((): IAnyType => Field)),
    defaultValue: types.optional(types.array(JsonValue), []),
  })
  .views((self) => ({
    getRows: (node: Instance<typeof Node>, path: string[]) => {
      return (node.getPropValue(path) as any[]) ?? []
    },
  }))
  .actions((self) => ({
    addRow: (node: Instance<typeof Node>, path: string[]) => {
      const rows = self.getRows(node, path)
      if (!rows) return
      node.setPropValue(path, [...rows, {}])
    },
    removeRow: (node: Instance<typeof Node>, path: string[], index: number) => {
      const rows = self.getRows(node, path)
      if (!rows) return
      node.setPropValue(
        path,
        rows.filter((_, i) => i !== index),
      )
    },
  }))

export const ArrayFieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof ArrayField>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    const rows = field.getRows(node, [...path, field.name])
    const [openRow, setOpenRow] = React.useState<string | undefined>(undefined)

    return (
      <div>
        <div className="flex justify-between items-center">
          <Label>{startCase(field.name)}</Label>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              field.addRow(node, [...path, field.name])
            }}
          >
            Add
          </Button>
        </div>
        <Accordion type="single" collapsible value={openRow} onValueChange={setOpenRow}>
          {rows.map((row, index) => {
            const rowKey = index.toString()
            return (
              <AccordionItem key={rowKey} value={rowKey}>
                <AccordionTrigger className="text-sm">Item {index + 1}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    {field.fields.map((nestedField) => (
                      <FieldComponent
                        key={nestedField.name}
                        field={nestedField}
                        node={node}
                        path={[...path, field.name, index.toString()]}
                      />
                    ))}
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => field.removeRow(node, [...path, field.name], index)}
                    >
                      Remove
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    )
  },
)

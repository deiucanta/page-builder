import { Field } from '@/store/Field'
import { types, Instance, SnapshotIn } from 'mobx-state-tree'

export const Block = types.model('Block', {
  type: types.identifier,
  fields: types.array(Field),
})

export type BlockType = Instance<typeof Block>
export type BlockSnapshotIn = SnapshotIn<typeof Block>

import { JsonValue } from '@/store/JsonValue'
import { get as getPath, set as setPath } from 'lodash'
import { IAnyModelType, Instance, cast, getSnapshot, types } from 'mobx-state-tree'

export const Node = types
  .model('Node', {
    id: types.optional(types.identifier, () => Math.random().toString(36).substring(2, 15)),
    name: types.string,
    type: types.string,
    open: types.optional(types.boolean, true),
    props: types.map(JsonValue),
    children: types.union(types.array(types.late((): IAnyModelType => Node)), types.undefined),
  })
  .views((self) => ({
    getPropValue(path: string[]) {
      return getPath(getSnapshot(self.props), path.join('.'))
    },
    getOpenMap() {
      const result: Record<string, boolean> = {}
      result[self.id] = self.open
      for (const child of self.children ?? []) {
        Object.assign(result, child.getOpenMap())
      }
      return result
    },
  }))
  .actions((self) => ({
    findNode(id: string) {
      if (self.id === id) return self
      if (!self.children) return null
      for (const child of self.children) {
        const node = child.findNode(id)
        if (node) return node
      }
      return null
    },
    insertNodes(index: number, nodes: Instance<typeof self>[]) {
      self.children?.splice(index, 0, ...nodes)
    },
    setPropValue(path: string[], value: any) {
      const snapshot = structuredClone(getSnapshot(self.props))
      self.props = cast(setPath(snapshot, path.join('.'), value))
    },
    toggle() {
      self.open = !self.open
    },
    getSnapshotWithoutId() {
      return {
        ...getSnapshot(self),
        id: undefined,
        children: self.children?.map((child) => child.getSnapshotWithoutId()),
      }
    },
  }))

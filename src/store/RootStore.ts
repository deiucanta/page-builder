import { Block } from '@/store/Block'
import { Node } from '@/store/Node'
import {
  Instance,
  destroy,
  detach,
  flow,
  getParentOfType,
  getSnapshot,
  types,
} from 'mobx-state-tree'

const APP_CLIPBOARD_MIME = 'application/x-page-editor-node'

export const RootStore = types
  .model('RootStore', {
    root: Node,
    selectedNode: types.maybeNull(types.reference(Node)),
    blocks: types.array(Block),
  })
  .views((self) => ({
    get data() {
      return self.root.children ? getSnapshot(self.root.children, false) : []
    },
    get openMap() {
      return self.root.getOpenMap()
    },
  }))
  .actions((self) => ({
    findNode: (id: string): Instance<typeof Node> | null => {
      return self.root.findNode(id)
    },
  }))
  .actions((self) => ({
    deleteNodes: (ids: string[]) => {
      for (const id of ids) {
        const node = self.findNode(id)
        if (!node) continue
        if (node.id === self.selectedNode?.id) {
          const parent = getParentOfType(node, Node)
          console.log('parent', parent && getSnapshot(parent))
          self.selectedNode = parent
        }
        destroy(node)
      }
    },
    renameNode: (id: string, name: string) => {
      const node = self.findNode(id)
      if (node) {
        node.name = name
      }
    },
    createNode: (parentId: string | null, _index: number, type: string) => {
      const parent = self.findNode(parentId ?? 'root')
      if (!parent) return null
      const node = Node.create({
        name: type,
        type,
        children: [],
      })
      parent.insertNodes(parent.children?.length ?? 0, [node])
      console.log('before', self.selectedNode && getSnapshot(self.selectedNode))
      self.selectedNode = node
      console.log('after', getSnapshot(self.selectedNode))
      return getSnapshot(node)
    },
    moveNodes: (parentId: string | null, index: number, dragIds: string[]) => {
      const parent = self.findNode(parentId ?? 'root')
      if (!parent) return
      const nodes: Instance<typeof Node>[] = []
      for (const dragId of dragIds) {
        const node = self.findNode(dragId)
        if (!node) continue
        nodes.push(node)
        detach(node)
      }
      parent.insertNodes(index, nodes)
    },
    selectNode: (id: string) => {
      self.selectedNode = self.findNode(id)
    },
    setData: (data: any) => {
      self.root.children = data
    },
    duplicateNode: (id: string) => {
      const node = self.findNode(id)
      if (!node) return
      const parent = getParentOfType(node, Node)
      if (!parent) return
      const newNode = Node.create({
        ...node.getSnapshotWithoutId(),
        name: `${node.name} (copy)`,
      })
      parent.insertNodes(parent.children?.length ?? 0, [newNode])
      self.selectedNode = newNode
    },
    copyNode: (id: string) => {
      const node = self.findNode(id)
      if (!node) return
      navigator.clipboard.writeText(
        JSON.stringify({
          type: APP_CLIPBOARD_MIME,
          node: node.getSnapshotWithoutId(),
        }),
      )
    },
    pasteNode: flow(function* (parentId: string = 'root') {
      const parent = self.findNode(parentId)
      if (!parent) return
      const data = yield getClipboardData()
      if (!data || data.type !== APP_CLIPBOARD_MIME || !data.node) return
      const newNode = Node.create({ ...data.node, name: `${data.node.name} (pasted)` })
      parent.insertNodes(0, [newNode])
      self.selectedNode = newNode
    }),
  }))
  .views((self) => ({
    get selectedBlock() {
      const node = self.selectedNode
      if (!node) return null
      return self.blocks.find((block) => block.type === node.type)
    },
  }))

async function getClipboardData() {
  let clipboardText
  try {
    clipboardText = await navigator.clipboard.readText()
  } catch {
    return
  }
  let data
  try {
    data = JSON.parse(clipboardText)
  } catch {
    return
  }
  return data
}

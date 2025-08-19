import { RootStore } from '@/store/RootStore'
import { Instance } from 'mobx-state-tree'
import { UndoManager } from 'mst-middlewares'
import { createContext, useContext } from 'react'
import { BlockType } from '@/store/Block'

export function createStoreAndHistory(blocks: BlockType[]) {
  const store = RootStore.create({
    root: {
      id: 'root',
      name: 'Root',
      type: 'root',
    },
    blocks,
  })
  const history = UndoManager.create({}, { targetStore: store })
  return { store, history }
}

export const StoreContext = createContext<Instance<typeof RootStore> | null>(null)
export const StoreProvider = StoreContext.Provider
export const StoreHistoryContext = createContext<Instance<typeof UndoManager> | null>(null)
export const StoreHistoryProvider = StoreHistoryContext.Provider

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return store
}

export const useStoreHistory = () => {
  const history = useContext(StoreHistoryContext)
  if (!history) {
    throw new Error('useStoreHistory must be used within a StoreHistoryProvider')
  }
  return history
}

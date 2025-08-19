import { types } from 'mobx-state-tree'

export const JsonValue = types.custom({
  name: 'JSON',
  fromSnapshot: (value: any) => value,
  toSnapshot: (value: any) => value,
  isTargetType: () => true,
  getValidationMessage: () => '',
})

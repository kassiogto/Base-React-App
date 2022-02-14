import { AddLoadingAction, RemoveLoadingAction, LOADING_TYPES } from './types'

export const addLoading = (...keys: string[]): AddLoadingAction => {
  const loadingToAdd: { [key: string]: boolean } = {}

  keys.forEach((key: string) => {
    loadingToAdd[key] = true
  })

  return {
    type: LOADING_TYPES.ADD_LOADING,
    payload: loadingToAdd,
  }
}

export const removeLoading = (...keys: string[]): RemoveLoadingAction => {
  return {
    type: LOADING_TYPES.REMOVE_LOADING,
    payload: keys,
  }
}

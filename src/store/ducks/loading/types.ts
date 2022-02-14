export enum LOADING_TYPES {
  ADD_LOADING = '@LOADING/ADD_LOADING',
  REMOVE_LOADING = '@LOADING/REMOVE_LOADING',
}

export interface LoadingState {
  loading: {
    [key: string]: boolean
  }
}

export type AddLoadingAction = {
  type: LOADING_TYPES.ADD_LOADING
  payload: { [key: string]: boolean }
}

export type RemoveLoadingAction = {
  type: LOADING_TYPES.REMOVE_LOADING
  payload: string[]
}

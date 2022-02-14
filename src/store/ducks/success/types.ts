export enum SUCCESS_TYPES {
  SHOW_SUCCESS = '@SUCCESS/SHOW_SUCCESS',
  HIDE_SUCCESS = '@SUCCESS/HIDE_SUCCESS',
  SHOW_TOAST = '@SUCCESS/SHOW_TOAST',
  HIDE_TOAST = '@SUCCESS/HIDE_TOAST',
}

export interface SuccessState {
  toast: {
    isShowing: boolean
    duration: number
    messageCode?: string
  }
  success: {
    [key: string]: boolean
  }
}

export interface ShowSuccessToastAction {
  type: SUCCESS_TYPES.SHOW_TOAST
  payload: {
    messageCode?: string
    duration: number
  }
}

export interface HideSuccessToastAction {
  type: SUCCESS_TYPES.HIDE_TOAST
}

export interface ShowSuccessAction {
  type: SUCCESS_TYPES.SHOW_SUCCESS
  payload: { [key: string]: boolean }
}

export interface HideSuccessAction {
  type: SUCCESS_TYPES.HIDE_SUCCESS
  payload: string[]
}

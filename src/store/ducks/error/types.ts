export enum ERROR_TYPES {
  SHOW_ERROR = '@ERROR/SHOW_ERROR',
  HIDE_ERROR = '@ERROR/HIDE_ERROR',
}

export interface ErrorState {
  isShowing: boolean
  title?: string
  messages?: string[]
}

export interface ShowErrorAction {
  type: ERROR_TYPES.SHOW_ERROR
  payload: {
    title?: string
    messages: string[]
  }
}

export interface HideErrorAction {
  type: ERROR_TYPES.HIDE_ERROR
}

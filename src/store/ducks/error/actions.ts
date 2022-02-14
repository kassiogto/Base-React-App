import { ServerMessage } from 'src/services'

import { ERROR_TYPES, ShowErrorAction, HideErrorAction } from './types'

export const showError = (
  messages: string[],
  title?: string,
): ShowErrorAction => ({
  type: ERROR_TYPES.SHOW_ERROR,
  payload: {
    title,
    messages,
  },
})

export const showServerError = (
  serverMessages: ServerMessage[],
  title?: string,
): ShowErrorAction => ({
  type: ERROR_TYPES.SHOW_ERROR,
  payload: {
    title,
    messages: serverMessages.map((message) => message.fullMessage),
  },
})

export const hideError = (): HideErrorAction => ({
  type: ERROR_TYPES.HIDE_ERROR,
})

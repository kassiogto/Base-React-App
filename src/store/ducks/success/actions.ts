import {
  SUCCESS_TYPES,
  ShowSuccessAction,
  HideSuccessAction,
  ShowSuccessToastAction,
  HideSuccessToastAction,
} from './types'

export const showSuccessToast = (toast?: {
  messageCode?: string
  duration?: number
}): ShowSuccessToastAction => {
  const { messageCode, duration = 4000 } = toast || {}

  return {
    type: SUCCESS_TYPES.SHOW_TOAST,
    payload: {
      messageCode,
      duration,
    },
  }
}

export const hideSuccessToast = (): HideSuccessToastAction => ({
  type: SUCCESS_TYPES.HIDE_TOAST,
})

export const showSuccess = (...keys: string[]): ShowSuccessAction => {
  const payload: { [key: string]: boolean } = {}

  keys.forEach((key: string) => {
    payload[key] = true
  })

  return {
    type: SUCCESS_TYPES.SHOW_SUCCESS,
    payload,
  }
}

export const hideSuccess = (...keys: string[]): HideSuccessAction => ({
  type: SUCCESS_TYPES.HIDE_SUCCESS,
  payload: keys,
})

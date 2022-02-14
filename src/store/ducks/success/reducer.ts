import { Reducer } from 'redux'

import { SUCCESS_TYPES, SuccessState } from './types'

export const initialState: SuccessState = {
  toast: {
    duration: 8000,
    isShowing: false,
  },
  success: {},
}

export const SuccessReducer: Reducer<SuccessState> = (
  state = initialState,
  action,
) => {
  const { type, payload } = action

  switch (type) {
    case SUCCESS_TYPES.SHOW_TOAST: {
      return { ...state, toast: { ...payload, isShowing: true } }
    }

    case SUCCESS_TYPES.HIDE_TOAST: {
      return { ...state, toast: { ...state.toast, isShowing: false } }
    }

    case SUCCESS_TYPES.SHOW_SUCCESS: {
      return {
        ...state,
        success: {
          ...state.success,
          ...payload,
        },
      }
    }

    case SUCCESS_TYPES.HIDE_SUCCESS: {
      const newSuccess = { ...state.success }

      payload.forEach((key: string) => {
        delete newSuccess[key]
      })

      return {
        ...state,
        success: newSuccess,
      }
    }

    default:
      return state
  }
}

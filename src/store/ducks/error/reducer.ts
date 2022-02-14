import { Reducer } from 'redux'

import { ERROR_TYPES, ErrorState } from './types'

export const initialState: ErrorState = {
  isShowing: false,
}

export const ErrorReducer: Reducer<ErrorState> = (
  state = initialState,
  action,
) => {
  const { type, payload } = action

  switch (type) {
    case ERROR_TYPES.SHOW_ERROR: {
      return {
        ...state,
        ...payload,
        isShowing: true,
      }
    }

    case ERROR_TYPES.HIDE_ERROR: {
      return {
        ...state,
        isShowing: false,
      }
    }

    default:
      return state
  }
}

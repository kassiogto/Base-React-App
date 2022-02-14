import { Reducer } from 'redux'

import { LOADING_TYPES, LoadingState } from './types'

const initialState: LoadingState = {
  loading: {},
}

export const LoadingReducer: Reducer<LoadingState> = (
  state = initialState,
  action,
) => {
  const { type, payload } = action

  switch (type) {
    case LOADING_TYPES.ADD_LOADING: {
      return {
        ...state,
        loading: {
          ...state.loading,
          ...payload,
        },
      }
    }

    case LOADING_TYPES.REMOVE_LOADING: {
      const newLoading = { ...state.loading }

      payload.forEach((key: string) => {
        delete newLoading[key]
      })

      return {
        ...state,
        loading: newLoading,
      }
    }

    default:
      return state
  }
}

import { Reducer } from 'redux'

import { AuthState, AUTH_TYPES } from './types'

export const initialState: AuthState = {
  isAuthenticated: false,
}

export const AuthReducer: Reducer<AuthState> = (
  state = initialState,
  action,
) => {
  const { type, payload } = action

  switch (type) {
    case AUTH_TYPES.SET_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: true,
        authData: payload.authData,
      }
    }

    case AUTH_TYPES.SET_NOT_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: false,
        authData: undefined,
      }
    }

    case AUTH_TYPES.UPDATE_AUTHENTICATED_AUTH_DATA: {
      return {
        ...state,
        authData: { ...(state.authData || {}), ...payload.authData },
      }
    }

    default:
      return state
  }
}

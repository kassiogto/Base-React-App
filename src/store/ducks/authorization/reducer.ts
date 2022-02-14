import { Reducer } from 'redux'

import { AuthorizationState, AUTHORIZATION_TYPES } from './types'

export const initialState: AuthorizationState = {
  pagePermissions: {},
}

export const AuthorizationReducer: Reducer<AuthorizationState> = (
  state = initialState,
  action,
) => {
  const { type, payload } = action

  switch (type) {
    case AUTHORIZATION_TYPES.SET_PAGE_PERMISSION: {
      return {
        ...state,
        pagePermissions: {
          ...state.pagePermissions,
          [payload.page]: payload,
        },
      }
    }

    default:
      return state
  }
}

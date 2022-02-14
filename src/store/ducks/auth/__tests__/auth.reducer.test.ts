import { AuthReducer } from '../reducer'
import {
  AUTH_TYPES,
  AuthState,
  SetAuthenticatedAction,
  SetNotAuthenticatedAction,
  UpdateAuthenticatedAuthDataAction,
} from '../types'

import { fakeUser } from './fakes'

describe('Auth Duck Reducer', () => {
  const fakeEmptyState: AuthState = {
    isAuthenticated: false,
    authData: undefined,
  }

  const fakeState: AuthState = {
    isAuthenticated: true,
    authData: fakeUser,
  }

  it('should set auth state as authenticated', () => {
    const action: SetAuthenticatedAction = {
      type: AUTH_TYPES.SET_AUTHENTICATED,
      payload: {
        authData: fakeUser,
      },
    }

    const newState = AuthReducer(fakeEmptyState, action)
    expect(newState).toEqual(fakeState)
  })

  it('should set auth state as NOT authenticated', () => {
    const action: SetNotAuthenticatedAction = {
      type: AUTH_TYPES.SET_NOT_AUTHENTICATED,
    }

    const newState = AuthReducer(fakeState, action)
    expect(newState).toEqual(fakeEmptyState)
  })

  it('should update the authenticated user data', () => {
    const action: UpdateAuthenticatedAuthDataAction = {
      type: AUTH_TYPES.UPDATE_AUTHENTICATED_AUTH_DATA,
      payload: {
        authData: {
          usuario_login: 'new',
        },
      },
    }

    const newState = AuthReducer(fakeState, action)

    const expectedState: AuthState = {
      ...fakeState,
      authData: {
        ...fakeUser,
        usuario_login: 'new',
      },
    }

    expect(newState).toEqual(expectedState)
  })
})

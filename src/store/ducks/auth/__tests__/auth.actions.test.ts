import faker from 'faker'

import {
  requestAuthenticate,
  requestCheckAuth,
  requestLogout,
  setAuthenticated,
  setNotAuthenticated,
  updateAuthenticatedAuthData,
} from '../actions'
import {
  AUTH_TYPES,
  RequestAuthenticateAction,
  RequestCheckAuthAction,
  RequestLogoutAction,
  SetAuthenticatedAction,
  SetNotAuthenticatedAction,
  UpdateAuthenticatedAuthDataAction,
} from '../types'

import { fakeUser } from './fakes'

describe('Auth Action Creators', () => {
  it('should create an action to request authentication', () => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const onAuthenticated = jest.fn()
    const action = requestAuthenticate(email, password, onAuthenticated)
    const expectedAction: RequestAuthenticateAction = {
      type: AUTH_TYPES.REQUEST_AUTHENTICATE,
      payload: {
        email,
        password,
        onAuthenticated,
      },
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to request an authentication check', () => {
    const action = requestCheckAuth()
    const expectedAction: RequestCheckAuthAction = {
      type: AUTH_TYPES.REQUEST_CHECK_AUTH,
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to request logout', () => {
    const successCallback = jest.fn()
    const action = requestLogout(successCallback)
    const expectedAction: RequestLogoutAction = {
      type: AUTH_TYPES.REQUEST_LOGOUT,
      payload: {
        successCallback,
      },
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to set an user as authenticated', () => {
    const action = setAuthenticated(fakeUser)

    const expectedAction: SetAuthenticatedAction = {
      type: AUTH_TYPES.SET_AUTHENTICATED,
      payload: {
        authData: fakeUser,
      },
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to set an user as authenticated', () => {
    const action = setAuthenticated(fakeUser)

    const expectedAction: SetAuthenticatedAction = {
      type: AUTH_TYPES.SET_AUTHENTICATED,
      payload: {
        authData: fakeUser,
      },
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to clear the authenticated user', () => {
    const action = setNotAuthenticated()
    const expectedAction: SetNotAuthenticatedAction = {
      type: AUTH_TYPES.SET_NOT_AUTHENTICATED,
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to update the authenticated user data', () => {
    const action = updateAuthenticatedAuthData({})
    const expectedAction: UpdateAuthenticatedAuthDataAction = {
      type: AUTH_TYPES.UPDATE_AUTHENTICATED_AUTH_DATA,
      payload: {
        authData: {},
      },
    }

    expect(action).toEqual(expectedAction)
  })
})

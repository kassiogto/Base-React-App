import {
  AUTH_TYPES,
  AuthData,
  RequestAuthenticateAction,
  RequestCheckAuthAction,
  RequestLogoutAction,
  SetAuthenticatedAction,
  SetNotAuthenticatedAction,
  UpdateAuthenticatedAuthDataAction,
} from './types'

export const requestAuthenticate = (
  email: string,
  password: string,
  onAuthenticated: () => void,
): RequestAuthenticateAction => ({
  type: AUTH_TYPES.REQUEST_AUTHENTICATE,
  payload: {
    email,
    password,
    onAuthenticated,
  },
})

export const setAuthenticated = (
  authData: AuthData,
): SetAuthenticatedAction => ({
  type: AUTH_TYPES.SET_AUTHENTICATED,
  payload: {
    authData,
  },
})

export const setNotAuthenticated = (): SetNotAuthenticatedAction => ({
  type: AUTH_TYPES.SET_NOT_AUTHENTICATED,
})

export const requestCheckAuth = (): RequestCheckAuthAction => ({
  type: AUTH_TYPES.REQUEST_CHECK_AUTH,
})

export const requestLogout = (
  successCallback?: () => void,
): RequestLogoutAction => ({
  type: AUTH_TYPES.REQUEST_LOGOUT,
  payload: {
    successCallback,
  },
})

export const updateAuthenticatedAuthData = (
  authData: Partial<AuthData>,
): UpdateAuthenticatedAuthDataAction => ({
  type: AUTH_TYPES.UPDATE_AUTHENTICATED_AUTH_DATA,
  payload: {
    authData,
  },
})

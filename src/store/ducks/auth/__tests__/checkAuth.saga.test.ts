import { expectSaga, testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

import { Server, USER_ROUTES } from 'src/services'
import { LOCAL_STORAGE_KEYS } from 'src/config'
import { makeServerResponse } from 'src/tests'
import {
  AddLoadingAction,
  LOADING_TYPES,
  RemoveLoadingAction,
} from 'src/store/ducks/loading'
import { ERROR_TYPES, ShowErrorAction } from 'src/store/ducks/error'

import {
  AUTH_TYPES,
  SetAuthenticatedAction,
  SetNotAuthenticatedAction,
} from '../types'
import { requestCheckAuthWatcher, handleCheckAuth } from '../checkAuth.saga'

import { fakeUser } from './fakes'

describe('Check Auth Saga', () => {
  const addLoadingAction: AddLoadingAction = {
    type: LOADING_TYPES.ADD_LOADING,
    payload: {
      [AUTH_TYPES.REQUEST_CHECK_AUTH]: true,
    },
  }

  const removeLoadingAction: RemoveLoadingAction = {
    type: LOADING_TYPES.REMOVE_LOADING,
    payload: [AUTH_TYPES.REQUEST_CHECK_AUTH],
  }

  const authenticatedAction: SetAuthenticatedAction = {
    type: AUTH_TYPES.SET_AUTHENTICATED,
    payload: {
      authData: fakeUser,
    },
  }

  const notAuthenticatedAction: SetNotAuthenticatedAction = {
    type: AUTH_TYPES.SET_NOT_AUTHENTICATED,
  }

  const showErrorAction: ShowErrorAction = {
    type: ERROR_TYPES.SHOW_ERROR,
    payload: {
      messages: ['Error'],
      title: undefined,
    },
  }

  const serverRequest = matchers.call(
    Server.get,
    [USER_ROUTES.USUARIO, fakeUser.usuario_codigo].join('/'),
  )

  const localStorageRequest = matchers.call(
    [localStorage, localStorage.getItem],
    LOCAL_STORAGE_KEYS.AUTH_DATA,
  )

  it('should take the latest action and call the worker saga', () => {
    testSaga(requestCheckAuthWatcher)
      .next()
      .takeLatest(AUTH_TYPES.REQUEST_CHECK_AUTH, handleCheckAuth)
  })

  it('should check if it is authenticated and set auth data', () => {
    return expectSaga(handleCheckAuth)
      .put(addLoadingAction)
      .provide([
        [localStorageRequest, JSON.stringify(fakeUser)],
        [serverRequest, makeServerResponse({ data: [fakeUser] })],
      ])
      .put(authenticatedAction)
      .put(removeLoadingAction)
      .run()
  })

  it('should set the user as not authenticated', () => {
    return expectSaga(handleCheckAuth)
      .put(addLoadingAction)
      .provide([[localStorageRequest, null]])
      .put(notAuthenticatedAction)
      .put(removeLoadingAction)
      .run()
  })

  it('should handle errors in catch block', () => {
    return expectSaga(handleCheckAuth)
      .put(addLoadingAction)
      .provide([[localStorageRequest, throwError(new Error('Error'))]])
      .put(showErrorAction)
      .put(removeLoadingAction)
      .run()
  })
})

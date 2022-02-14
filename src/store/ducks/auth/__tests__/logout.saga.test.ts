import { expectSaga, testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

import {
  AUTH_TYPES,
  SetNotAuthenticatedAction,
  RequestLogoutAction,
} from '../types'
import { ERROR_TYPES, ShowErrorAction } from '../../error'
import { requestLogoutWatcher, handleLogout } from '../logout.saga'

describe('Logout Saga', () => {
  const successCallback = jest.fn()

  const logoutAction: RequestLogoutAction = {
    type: AUTH_TYPES.REQUEST_LOGOUT,
    payload: {
      successCallback,
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

  const localStorageCall = matchers.call([localStorage, localStorage.clear])

  it('should take the latest action and call the worker saga', () => {
    testSaga(requestLogoutWatcher)
      .next()
      .takeLatest(AUTH_TYPES.REQUEST_LOGOUT, handleLogout)
  })

  it('should logout the current user', () => {
    return expectSaga(handleLogout, logoutAction)
      .provide([
        [localStorageCall, undefined],
        [matchers.call(successCallback), undefined],
      ])
      .put(notAuthenticatedAction)
      .run()
  })

  it('should handle errors in catch block', () => {
    return expectSaga(handleLogout, logoutAction)
      .provide([[localStorageCall, throwError(new Error('Error'))]])
      .put(showErrorAction)
      .run()
  })
})

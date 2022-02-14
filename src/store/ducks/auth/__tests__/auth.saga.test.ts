import faker from 'faker'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'

import { LOGIN_ROUTES, Server } from 'src/services'
import { makeServerResponse } from 'src/tests'
import {
  AddLoadingAction,
  LOADING_TYPES,
  RemoveLoadingAction,
} from 'src/store/ducks/loading'

import { handleAuthentication, requestAuthenticateWatcher } from '../auth.saga'
import {
  AUTH_TYPES,
  RequestAuthenticateAction,
  SetAuthenticatedAction,
} from '../types'

import { fakeUser } from './fakes'

describe('Auth saga', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()
  const onAuthenticated = jest.fn()

  const action: RequestAuthenticateAction = {
    type: AUTH_TYPES.REQUEST_AUTHENTICATE,
    payload: {
      email,
      password,
      onAuthenticated,
    },
  }

  const addLoadingAction: AddLoadingAction = {
    type: LOADING_TYPES.ADD_LOADING,
    payload: {
      [AUTH_TYPES.REQUEST_AUTHENTICATE]: true,
    },
  }

  const removeLoadingAction: RemoveLoadingAction = {
    type: LOADING_TYPES.REMOVE_LOADING,
    payload: [AUTH_TYPES.REQUEST_AUTHENTICATE],
  }

  const successAction: SetAuthenticatedAction = {
    type: AUTH_TYPES.SET_AUTHENTICATED,
    payload: {
      authData: fakeUser,
    },
  }

  const serverRequest = matchers.call(
    Server.get,
    [LOGIN_ROUTES.LOGIN_EMAIL, email, password].join('/'),
  )

  it('should take the latest action and call the worker saga', () => {
    testSaga(requestAuthenticateWatcher)
      .next()
      .takeLatest(AUTH_TYPES.REQUEST_AUTHENTICATE, handleAuthentication)
  })

  it('should send a server request to authenticate an user', () => {
    return expectSaga(handleAuthentication, action)
      .put(addLoadingAction)
      .provide([[serverRequest, makeServerResponse({ data: [fakeUser] })]])
      .put(successAction)
      .put(removeLoadingAction)
      .run()
  })
})

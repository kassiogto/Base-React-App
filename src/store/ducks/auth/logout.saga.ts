import { call, put, takeLatest } from 'redux-saga/effects'

import { showError } from 'src/store/ducks/error'

import { setNotAuthenticated } from './actions'
import { AUTH_TYPES, RequestLogoutAction } from './types'

export function* requestLogoutWatcher() {
  yield takeLatest(AUTH_TYPES.REQUEST_LOGOUT, handleLogout)
}

export function* handleLogout(action: RequestLogoutAction) {
  try {
    const { successCallback } = action.payload
    yield call([localStorage, localStorage.clear])
    yield put(setNotAuthenticated())
    if (successCallback) yield call(successCallback)
  } catch (e: any) {
    yield put(showError(e && e.message ? [e.message] : []))
  }
}

import { takeLatest } from 'redux-saga/effects'

import { getDefaultHeaders, Server } from 'src/services'

import { AUTH_TYPES } from './types'

export function* clearHeadersWatcher() {
  yield takeLatest(AUTH_TYPES.SET_NOT_AUTHENTICATED, handleClearHeaders)
}

export function* handleClearHeaders() {
  Server.defaults.headers = getDefaultHeaders()
}

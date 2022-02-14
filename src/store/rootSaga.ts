import { all } from 'redux-saga/effects'

import {
  requestAuthenticateWatcher,
  requestLogoutWatcher,
  requestCheckAuthWatcher,
  setHeadersWatcher,
  clearHeadersWatcher,
} from 'src/store/ducks/auth'

export default function* rootSaga() {
  yield all([
    setHeadersWatcher(),
    clearHeadersWatcher(),
    requestLogoutWatcher(),
    requestCheckAuthWatcher(),
    requestAuthenticateWatcher(),
  ])
}

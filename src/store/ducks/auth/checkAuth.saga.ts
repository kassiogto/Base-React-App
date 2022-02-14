import { call, put, takeLatest } from 'redux-saga/effects'

import { LOCAL_STORAGE_KEYS } from 'src/config'
import { showError } from 'src/store/ducks/error'
import { addLoading, removeLoading } from 'src/store/ducks/loading'
import { AxiosServerResponse, Server, USER_ROUTES } from 'src/services'

import { AUTH_TYPES, AuthData } from './types'
import { setAuthenticated, setNotAuthenticated } from './actions'

export function* requestCheckAuthWatcher() {
  yield takeLatest(AUTH_TYPES.REQUEST_CHECK_AUTH, handleCheckAuth)
}

export function* handleCheckAuth() {
  try {
    yield put(addLoading(AUTH_TYPES.REQUEST_CHECK_AUTH))

    const authDataJson: string = yield call(
      [localStorage, localStorage.getItem],
      LOCAL_STORAGE_KEYS.AUTH_DATA,
    )

    if (authDataJson) {
      const authData: AuthData = JSON.parse(authDataJson)

      let currentAuthData: Partial<AuthData> = {}
      if (authData && authData.usuario_codigo) {
        const routeArray = [USER_ROUTES.USUARIO, authData.usuario_codigo]

        const { data }: AxiosServerResponse<AuthData> = yield call(
          Server.get,
          routeArray.join('/'),
        )

        currentAuthData = data.getFirstData() || {}
      }

      yield put(setAuthenticated({ ...authData, ...currentAuthData }))
    } else {
      yield put(setNotAuthenticated())
    }
  } catch (e: any) {
    yield put(showError(e && e.message ? [e.message] : []))
  } finally {
    yield put(removeLoading(AUTH_TYPES.REQUEST_CHECK_AUTH))
  }
}

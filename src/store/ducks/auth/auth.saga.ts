import { call, put, takeLatest } from 'redux-saga/effects'

import {
  AxiosServerResponse,
  USER_REGISTRY_ROUTES,
  LOGIN_ROUTES,
  Server,
  serverStructureFactory,
  SERVER_HEADERS,
} from 'src/services'
import { LOCAL_STORAGE_KEYS } from 'src/config'
import { showError, showServerError } from 'src/store/ducks/error'
import { addLoading, removeLoading } from 'src/store/ducks/loading'

import { AUTH_TYPES, AuthData, RequestAuthenticateAction } from './types'
import { setAuthenticated } from './actions'

type RequestData = Pick<
  UncDashboard.User & UncDashboard.Login,
  'usuario_emaillogin' | 'usuario_senha' | 'login_macadress'
>

type CustomerRegistryResponse = AxiosServerResponse<
  Pick<UncDashboard.Customer, 'cliente_codigo'>
>

export function* requestAuthenticateWatcher() {
  yield takeLatest(AUTH_TYPES.REQUEST_AUTHENTICATE, handleAuthentication)
}

export function* handleFetchCustomerId(email: string) {
  const { data }: CustomerRegistryResponse = yield call(
    Server.get,
    [USER_REGISTRY_ROUTES.CONSULTA_EMAIL_USUARIO, email].join('/'),
    {
      headers: {
        [SERVER_HEADERS.PUBCLIENTEREGISTRO]: '',
      },
    },
  )

  if (data.isSuccessful && data.hasData) {
    const customerRegistry = data.getFirstData()
    return customerRegistry?.cliente_codigo
  } else if (data.messages.length) {
    yield put(showServerError(data.messages))
  } else {
    yield put(showError([]))
  }
}

export function* handleUserAuthRequest(
  { email, password, onAuthenticated }: RequestAuthenticateAction['payload'],
  customerId: string,
) {
  const requestData: RequestData = {
    usuario_emaillogin: email,
    usuario_senha: password,
    login_macadress: '-',
  }

  const { data }: AxiosServerResponse<AuthData> = yield call(
    Server.put,
    LOGIN_ROUTES.LOGIN_EMAIL,
    serverStructureFactory(requestData),
    {
      headers: {
        [SERVER_HEADERS.PUBCLIENTEREGISTRO]: customerId,
      },
    },
  )

  if (data.isSuccessful) {
    const authData = data.getFirstData()

    if (authData) {
      const authDataWithCustomerId: AuthData = {
        ...authData,
        cliente_codigo: '12',
      }

      yield call(
        [localStorage, localStorage.setItem],
        LOCAL_STORAGE_KEYS.AUTH_DATA,
        JSON.stringify(authDataWithCustomerId),
      )

      yield put(setAuthenticated(authDataWithCustomerId))
      if (onAuthenticated) yield call(onAuthenticated)
    }
  } else if (data.messages.length) {
    yield put(showServerError(data.messages))
  } else {
    yield put(showError([]))
  }
}

export function* handleAuthentication(action: RequestAuthenticateAction) {
  try {
    yield put(addLoading(AUTH_TYPES.REQUEST_AUTHENTICATE))

    const customerId: string | undefined = yield call(
      handleFetchCustomerId,
      action.payload.email,
    )

    if (customerId) {
      yield call(handleUserAuthRequest, action.payload, customerId)
    }
  } catch (e: any) {
    yield put(showError([e.message]))
  } finally {
    yield put(removeLoading(AUTH_TYPES.REQUEST_AUTHENTICATE))
  }
}

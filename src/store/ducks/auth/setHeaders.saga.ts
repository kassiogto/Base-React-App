import { takeLatest } from 'redux-saga/effects'

import { getDefaultHeaders, Server, SERVER_HEADERS } from 'src/services'

import { AUTH_TYPES, AuthData, SetAuthenticatedAction } from './types'

export function* setHeadersWatcher() {
  yield takeLatest(AUTH_TYPES.SET_AUTHENTICATED, handleSetHeaders)
}

export function getHeadersWithAuthData(authData: Partial<AuthData>) {
  if (!authData) return {}

  const {
    usuario_login = '',
    login_macadress = '',
    empresa_codigo = '',
    repres_codigo = '',
    cliente_codigo = '',
    usuario_permitealterarempresa = 'N',
  } = authData

  return {
    [SERVER_HEADERS.PUBUSUARIO]: usuario_login,
    [SERVER_HEADERS.PUBMACADDRESS]: login_macadress,
    [SERVER_HEADERS.PUBEMPRESA]: empresa_codigo,
    [SERVER_HEADERS.REPRES_CODIGO]: repres_codigo,
    [SERVER_HEADERS.PUBCLIENTEREGISTRO]: cliente_codigo,
    [SERVER_HEADERS.PUBUSUARIOALTERAEMPRESA]: usuario_permitealterarempresa,
  }
}

export function* handleSetHeaders(action: SetAuthenticatedAction) {
  const { authData } = action.payload

  const defaultHeaders = getDefaultHeaders()
  const headersWithAuthData = getHeadersWithAuthData(authData)

  // Server.defaults.headers = {
  //   ...defaultHeaders,
  //   ...headersWithAuthData,
  // }
}

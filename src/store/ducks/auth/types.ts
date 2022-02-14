export enum AUTH_TYPES {
  REQUEST_AUTHENTICATE = '@AUTH/REQUEST_AUTHENTICATE',
  REQUEST_CHECK_AUTH = '@AUTH/REQUEST_CHECK_AUTH',
  REQUEST_LOGOUT = '@AUTH/REQUEST_LOGOUT',

  SET_AUTHENTICATED = '@AUTH/SET_AUTHENTICATED',
  SET_NOT_AUTHENTICATED = '@AUTH/SET_NOT_AUTHENTICATED',
  UPDATE_AUTHENTICATED_AUTH_DATA = '@AUTH/UPDATE_AUTHENTICATED_AUTH_DATA',
}

export type AuthData = Pick<
  UncDashboard.User &
    UncDashboard.Login &
    UncDashboard.Representative &
    UncDashboard.Company &
    UncDashboard.Customer,
  | 'usuario_codigo'
  | 'usuario_login'
  | 'usuario_permitealterarempresa'
  | 'usuario_emaillogin'
  | 'login_macadress'
  | 'repres_codigo'
  | 'empresa_codigo'
  | 'empresa_razao'
  | 'empresa_fantasia'
  | 'cliente_codigo'
>

export interface AuthState {
  isAuthenticated: boolean
  authData?: AuthData
}

export interface RequestAuthenticateAction {
  type: AUTH_TYPES.REQUEST_AUTHENTICATE
  payload: {
    email: string
    password: string
    onAuthenticated: () => void
  }
}

export interface SetAuthenticatedAction {
  type: AUTH_TYPES.SET_AUTHENTICATED
  payload: {
    authData: AuthData
  }
}

export interface SetNotAuthenticatedAction {
  type: AUTH_TYPES.SET_NOT_AUTHENTICATED
}

export interface RequestCheckAuthAction {
  type: AUTH_TYPES.REQUEST_CHECK_AUTH
}

export interface RequestLogoutAction {
  type: AUTH_TYPES.REQUEST_LOGOUT
  payload: {
    successCallback?: () => void
  }
}

export interface UpdateAuthenticatedAuthDataAction {
  type: AUTH_TYPES.UPDATE_AUTHENTICATED_AUTH_DATA
  payload: {
    authData: Partial<AuthData>
  }
}

export enum AUTHORIZATION_TYPES {
  REQUEST_FETCH_PAGE_PERMISSIONS = '@AUTHORIZATION/REQUEST_FETCH_PAGE_PERMISSIONS',

  SET_PAGE_PERMISSION = '@AUTHORIZATION/SET_PAGE_PERMISSION',
}

export interface PagePermission {
  page: number
  canSeePage: boolean
}

export interface AuthorizationState {
  pagePermissions: {
    [key: number]: PagePermission
  }
}

export interface RequestFetchPagePermissionsAction {
  type: AUTHORIZATION_TYPES.REQUEST_FETCH_PAGE_PERMISSIONS
  payload: {
    page: number
    userId: number
  }
}

export interface SetPagePermissionAction {
  type: AUTHORIZATION_TYPES.SET_PAGE_PERMISSION
  payload: PagePermission
}

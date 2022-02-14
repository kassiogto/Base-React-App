import {
  AUTHORIZATION_TYPES,
  PagePermission,
  RequestFetchPagePermissionsAction,
  SetPagePermissionAction,
} from './types'

export const requestFetchPagePermissions = (
  payload: RequestFetchPagePermissionsAction['payload'],
): RequestFetchPagePermissionsAction => ({
  type: AUTHORIZATION_TYPES.REQUEST_FETCH_PAGE_PERMISSIONS,
  payload,
})

export const setPagePermission = (
  permission: PagePermission,
): SetPagePermissionAction => ({
  type: AUTHORIZATION_TYPES.SET_PAGE_PERMISSION,
  payload: permission,
})

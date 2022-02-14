import faker from 'faker'

import { requestFetchPagePermissions, setPagePermission } from '../actions'
import {
  AUTHORIZATION_TYPES,
  RequestFetchPagePermissionsAction,
  SetPagePermissionAction,
} from '../types'

describe('Authorization duck actions', () => {
  it('should create an action to fetch page permissions', () => {
    const page = faker.random.number()
    const userId = faker.random.number()

    const action = requestFetchPagePermissions({
      page,
      userId,
    })

    const expectedAction: RequestFetchPagePermissionsAction = {
      type: AUTHORIZATION_TYPES.REQUEST_FETCH_PAGE_PERMISSIONS,
      payload: {
        page,
        userId,
      },
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to set a page permission in state', () => {
    const page = faker.random.number()

    const action = setPagePermission({
      page,
      canSeePage: true,
    })

    const expectedAction: SetPagePermissionAction = {
      type: AUTHORIZATION_TYPES.SET_PAGE_PERMISSION,
      payload: {
        page,
        canSeePage: true,
      },
    }

    expect(action).toEqual(expectedAction)
  })
})

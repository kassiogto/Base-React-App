import faker from 'faker'

import {
  AuthorizationState,
  AUTHORIZATION_TYPES,
  SetPagePermissionAction,
} from '../types'
import { initialState, AuthorizationReducer } from '../reducer'

describe('Authorization duck reducer', () => {
  it('should add a page permission in state', () => {
    const page = faker.random.number()

    const action: SetPagePermissionAction = {
      type: AUTHORIZATION_TYPES.SET_PAGE_PERMISSION,
      payload: {
        page,
        canSeePage: true,
      },
    }

    const newState = AuthorizationReducer(initialState, action)

    const expectedState: AuthorizationState = {
      pagePermissions: {
        [page]: {
          page,
          canSeePage: true,
        },
      },
    }

    expect(newState).toEqual(expectedState)
  })
})

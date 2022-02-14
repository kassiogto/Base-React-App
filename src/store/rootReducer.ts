import { combineReducers } from 'redux'

import { AuthReducer } from './ducks/auth'
import { ErrorReducer } from './ducks/error'
import { LoadingReducer } from './ducks/loading'
import { SuccessReducer } from './ducks/success'
import { AuthorizationReducer } from './ducks/authorization'

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Error: ErrorReducer,
  Loading: LoadingReducer,
  Success: SuccessReducer,
  Authorization: AuthorizationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

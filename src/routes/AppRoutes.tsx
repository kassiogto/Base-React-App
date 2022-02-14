import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Splash } from 'src/components'
import { useIsAuthenticated, useIsLoading } from 'src/hooks'
import { AUTH_TYPES, requestCheckAuth } from 'src/store/ducks/auth'

import AuthRoutes from './AuthRoutes'
import MainRoutes from './MainRoutes'

const AppRoutes: React.FC = () => {
  const isCheckingAuth = useIsLoading(AUTH_TYPES.REQUEST_CHECK_AUTH)
  const isAuthenticated = useIsAuthenticated()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(requestCheckAuth())
  }, [dispatch])

  return isCheckingAuth ? (
    <Splash />
  ) : (
    <BrowserRouter>
      {!isAuthenticated ? <MainRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

export default AppRoutes

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from 'src/pages/Login'
import PageNotFound from 'src/pages/PageNotFound'

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route component={Login} path="/login" exact />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default AuthRoutes

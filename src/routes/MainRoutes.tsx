import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from 'src/pages/Main'

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route component={Main} path="/" />
    </Switch>
  )
}

export default MainRoutes

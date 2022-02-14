import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PageNotFound from 'src/pages/PageNotFound'
import Home from 'src/pages/Home'

const MainContentRoutes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default MainContentRoutes

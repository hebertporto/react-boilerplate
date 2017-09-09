import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Router

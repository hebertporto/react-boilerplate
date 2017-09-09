import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'
import TaskManager from './task/containers/TaskManager'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/task" component={TaskManager} />
  </Switch>
)

export default Router

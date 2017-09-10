import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'

import TaskManager from './task/containers/TaskManager'
import TaskForm from './task/containers/TaskForm'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/task" component={TaskManager} />
    <Route exact path="/taskForm" component={TaskForm} />
  </Switch>
)

export default Router

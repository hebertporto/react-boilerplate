import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/containers/Home'

import TaskManager from './task/containers/TaskManager'
import TaskForm from './task/containers/TaskForm'
import Test from './task/containers/Test'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Test} />
    <Route exact path="/task" component={TaskManager} />
    <Route exact path="/taskForm" component={TaskForm} />
  </Switch>
)

export default Router

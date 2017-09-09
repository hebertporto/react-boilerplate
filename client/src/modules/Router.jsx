import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Team from './team/containers/Team'
import TeamCreate from './team/containers/TeamCreate'

const Router = props => (
  <Switch>
    <Route exact path="/" component={Team} />
    <Route path="/createTeam" component={TeamCreate} />
  </Switch>
)

export default Router

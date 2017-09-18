import React from 'react'

import './shared/style/site.less'

import Header from './shared/components/layout/Header'
import Router from './Router'

const App = () => (
  <div className="container-fluid">
    <Header />
    <Router />
  </div>
)

export default App

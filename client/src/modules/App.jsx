import React from 'react'

import './shared/style/site.less'

import Header from './shared/components/Header'
import Router from './Router'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Router />
    </div>
  </div>
)

export default App

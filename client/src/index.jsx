import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import history from './config/utils/historyRouter'

import store from './config/store/createdStore'

import App from './modules/App'

render((
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))

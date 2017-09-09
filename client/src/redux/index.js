import { combineReducers } from 'redux'

import HomeReducer from './reducers/home/'

const rootReducer = combineReducers({
  home: HomeReducer,
})

export default rootReducer

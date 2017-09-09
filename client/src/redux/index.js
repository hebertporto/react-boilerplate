import { combineReducers } from 'redux'

import HomeReducer from './reducers/home/'
import TaskReducer from './reducers/task/'

const rootReducer = combineReducers({
  home: HomeReducer,
  task: TaskReducer,
})

export default rootReducer

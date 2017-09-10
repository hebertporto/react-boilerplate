import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

import HomeReducer from './reducers/home/'
import TaskReducer from './reducers/task/'

const rootReducer = combineReducers({
  home: HomeReducer,
  task: TaskReducer,
  form: FormReducer,
})

export default rootReducer

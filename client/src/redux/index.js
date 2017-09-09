import { combineReducers } from 'redux'

import TeamReducer from './reducers/team/'

const rootReducer = combineReducers({
  team: TeamReducer,
})

export default rootReducer

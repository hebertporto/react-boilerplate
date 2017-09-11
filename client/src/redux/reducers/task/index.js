import { TEAM_FECTH_INFO, TASK_CREATE } from './../../actions/task/types'
import * as reducers from './reducers'

const INITIAL_STATE = {
  info: 'vazio',
  taskList: [
    { desc: 'tarefa deafult', data: '10/20' },
  ],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_FECTH_INFO:
      return { ...state, info: action.payload }
    case TASK_CREATE:
      return reducers.saveTask(state, action)
    default:
      return state
  }
}

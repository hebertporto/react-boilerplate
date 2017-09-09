import { TEAM_FECTH_INFO } from './../../actions/team/types'


const INITIAL_STATE = {
  info: 'vazio',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_FECTH_INFO:
      return { ...state, info: action.payload }
    default:
      return state
  }
}

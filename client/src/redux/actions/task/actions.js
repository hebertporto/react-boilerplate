import { TEAM_FECTH_INFO } from './types'

export function fetchInfo() {
  const info = 'hello by redux Action Task'
  return (dispatch) => {
    dispatch({ type: TEAM_FECTH_INFO, payload: info })
  }
}

export function setInfo() {
  const info = 'from action'
  return {
    type: 'TEAM_FECTH_INFO',
    payload: info,
  }
}

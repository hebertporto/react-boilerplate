export function saveTask(state, { payload }) {
  const newTaskList = state.taskList
  newTaskList.push(payload)
  return { ...state, taskList: newTaskList }
}

export function updateContacts(state, { payload }) {
  return { ...state, ...{ taskList: payload } }
}

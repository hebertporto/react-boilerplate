import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <div className="task-component-projeto">
        <p>To Do Manager</p>
      </div>
    )
  }
}

export default connect(null, null)(TodoManager)

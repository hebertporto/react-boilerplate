import React, { Component } from 'react'
import { connect } from 'react-redux'

class DoneManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <div className="task-component-projeto">
        <p>Done Manager</p>
      </div>
    )
  }
}

export default connect(null, null)(DoneManager)

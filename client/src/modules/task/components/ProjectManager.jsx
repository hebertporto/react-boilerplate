import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      <div className="task-component-projeto">
        <h1>Projeto</h1>
      </div>
    )
  }
}

export default connect(null, null)(ProjectManager)


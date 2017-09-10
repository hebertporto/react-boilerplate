import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchInfo } from './../../../redux/actions/task/actions'


class TaskForm extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <div>
        <h1> Task Manager Component </h1>
        <h2>{this.props.info}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.task.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)

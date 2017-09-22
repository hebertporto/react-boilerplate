import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import ProjectManager from './../components/ProjectManager'
import ClientManager from './../components/ClientManager'
import DoneManager from './../components/DoneManager'
import TodoManager from './../components/TodoManager'

import { fetchInfo } from './../../../redux/actions/task/actions'

import './../style/task.less'

class TaskManager extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    const { tasks } = this.props
    return (
      <Row>
        <Col md={12} className="task-manager-container">
          <div className="task-box-cliente">
            <ClientManager />
          </div>
          <div className="task-box-projeto">
            <ProjectManager />
          </div>
          <div className="task-box-todo">
            <TodoManager />
          </div>
          <div className="task-box-done">
            <DoneManager />
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.task.info,
    tasks: state.task.taskList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)

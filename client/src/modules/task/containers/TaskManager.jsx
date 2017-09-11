import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import { fetchInfo } from './../../../redux/actions/task/actions'


class TaskManager extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    const { tasks } = this.props
    return (
      <Row>
        <Col md={12}>
          <h1> Task Manager Comp </h1>
        </Col>
        <Col md={6}>
          <p> Bloco de texto 1 bla bla bla</p>
        </Col>
        <Col md={6}>
          <ul>
            {tasks.map((item, index) => (
              <li key={item.desc}>{item.desc} - {item.data}</li>
            ))}
          </ul>
        </Col>
        <Col md={12}>
          <Link className="btn btn-default btn-lg" to="/taskForm">Task Form</Link>
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

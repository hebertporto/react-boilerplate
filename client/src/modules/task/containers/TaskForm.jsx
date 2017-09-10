import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
} from 'react-bootstrap'

import FormTask from './../components/Form'

import { fetchInfo, createTask } from './../../../redux/actions/task/actions'


class TaskForm extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <Row>
        <Col md={12}>
          <FormTask onSubmit={this.props.createTask} />
        </Col>
      </Row>
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
    createTask: form => dispatch(createTask(form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)

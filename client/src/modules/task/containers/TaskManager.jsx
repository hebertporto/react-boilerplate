import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import ProjectManager from './../components/ProjectManager'

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
            <p>Cliente</p>
            <div id="header"><Link to="/"> CLIQUE 1</Link></div>
            <div id="header" className="override"><Link to="/"> CLIQUE 2</Link></div>
            <div className="override"><Link to="/"> CLIQUE 3</Link></div>
            <div><Link to="/"> CLIQUE 4 </Link></div>
          </div>
          <div className="task-box-projeto">
            <p>Projetos</p>
          </div>
          <div className="task-box-todo">
            <p>TODO</p>
          </div>
          <div className="task-box-done">
            <p>DONE</p>
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Jumbotron, Row, Grid } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { fetchInfo } from './../../../redux/actions/home/actions'


class Home extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p><Link className="btn btn-primary btn-lg" to="/taskForm">Task Form</Link></p>
          </Jumbotron>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.home.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

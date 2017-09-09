import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchInfo } from './../../../redux/actions/team/actions'


class Team extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <div>
        <h1> Team Component </h1>
        <h2>{this.props.info}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.team.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)

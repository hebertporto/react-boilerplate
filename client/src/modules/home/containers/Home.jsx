import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchInfo } from './../../../redux/actions/home/actions'


class Home extends Component {
  componentDidMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1> Home Component </h1>
          <h2>{this.props.info}</h2>
        </div>
      </div>
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
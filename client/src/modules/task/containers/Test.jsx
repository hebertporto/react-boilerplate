import React from 'react'
import {
  Row,
  Col,
  Image,
  Glyphicon,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Test = (props) => {
  const { teams, pushTeam } = props

  return (
    <Row className="container team-page-info">
      <Col md={6} className="team-page-group-1">
        <div className="team-page-group-1-img">
          <Image src="http://lorempixel.com/400/400/" className="team-page-img" circle />
        </div>
        <div className="team-page-group-1-text-info">
          <div className="team-page-group-1-text-info-details">
            <span className="team-page-group-1-text-info-details-title">
              TEAM | Members: 12
            </span><br />
            Created: 06/09/2017 <br />
          </div>
          <div className="team-page-group-1-text-info-description">
            <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin hendrerit nunc ut diam pharetra
            </p>
          </div>
        </div>
        <div className="team-page-group-divider" />
      </Col>
      <Col md={4} className="team-page-group-2">
        <div className="test">
          <span className="team-second-color">Total</span>
          <span className="team-white">280</span>
        </div>
        <div className="test">
          <span className="team-second-color">Weekly Runner Average</span>
          <span className="team-white">21.2</span>
        </div>
        <div className="test">
          <span className="team-second-color">Todays Total Miles</span>
          <span className="team-white">3831</span>
        </div>
      </Col>
      <Col md={2} className="team-page-group-3">
        <div className="test-2">
          <Glyphicon glyph="search" className="team-second-color icon" />
          <span className="team-white"> Invite Others</span>
        </div>
        <div className="test-2">
          <Glyphicon glyph="star" className="team-second-color icon" />
          <span className="team-white"> Awards</span>
        </div>
        <div className="test-2">
          <Glyphicon glyph="star" className="team-second-color icon" />
          <span className="team-white"> Manage</span>
        </div>
      </Col>
    </Row>
  )
}

export default Test

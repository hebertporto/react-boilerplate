import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Col,
  Form,
  Row,
} from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

class ClientManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  render() {
    const FieldInput = ({ input, meta, placeholder, ...props }) => {
      return (
        <FormControl
          {...props}
          {...input}
          type="text"
          placeholder={placeholder}
        />
      )
    }
    return (
      <div className="task-component-projeto">
        <Row>
          <Col md={6}>
            <FormGroup controlId="formBasicText" >
              <ControlLabel>Add New Client</ControlLabel>
              <Field
                name="client"
                placeholder="Nome do Cliente"
                component={FieldInput}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(null, null)(ClientManager)

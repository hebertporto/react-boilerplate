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
import { Redirect } from 'react-router-dom'

class FormTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { handleSubmit } = this.props

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
      <Row>
        <Form onSubmit={handleSubmit}>
          <Col md={6}>
            <FormGroup controlId="formBasicText" >
              <ControlLabel>Working example with aadsa</ControlLabel>
              <Field
                name="desc"
                placeholder="Descrição"
                component={FieldInput}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <Button type="submit">
              Submit
            </Button>
          </Col>
        </Form>
      </Row>
    )
  }
}

export default reduxForm({ form: 'taskForm',
  onSubmitSuccess: () => {
    return () => (<Redirect to="/" />)
  },
})(FormTask)

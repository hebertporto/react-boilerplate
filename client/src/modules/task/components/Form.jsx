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
} from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

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
      <Form onSubmit={handleSubmit}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Working example with aadsa</ControlLabel>
          <Col md={6}>
            <Field name="desc" placeholder="Descrição" component={FieldInput} />
          </Col>
          <Col md={6}>
            <Field name="data" placeholder="Data" component={FieldInput} />
          </Col>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default reduxForm({ form: 'taskForm' })(FormTask)

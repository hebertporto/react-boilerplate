import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
} from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'

class Form extends Component {
  static FieldInput() {
    return (
      <FormControl
        type="text"
        value={this.state.value}
        placeholder="Enter text Form do Component"
        onChange={this.handleChange}
      />
    )
  }

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

    return (
      <form onSubmit={handleSubmit}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Working example with validation</ControlLabel><br />
          <Field name="desc" component="input" />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'taskForm' })(Form)

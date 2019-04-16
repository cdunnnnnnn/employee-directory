import React, { Component } from 'react'

class EmployeeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeContent: ''
    }
  }

  addEmployee = event => {
    event.preventDefault()
    if (this.state.employeeContent === '') return

    this.props.createEmployee(this.state.employeeContent)
    this.setState({ employeeContent: '' })
  }

  updateEmployeeContent = event => {
    const { value } = event.target
    this.setState({
      employeeContent: value
    })
  }

  render() {
    const { employeeContent } = this.state

    return (
      <form onSubmit={this.addEmployee}>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={employeeContent}
          onChange={this.updateEmployeeContent}
        />
        <button type="submit" aria-label="Add" onClick={this.addEmployee}>
          Add
        </button>
      </form>
    )
  }
}

export default EmployeeForm

import React, { Component } from 'react'
import Nav from './Nav'
import Form from './Form'

class EmployeeInfo extends Component {
  constructor() {
    super()
    this.state = {
      newMode: false,
      employee: ''
    }
  }

  componentDidMount = async () => {
    const {
      match: { params }
    } = this.props

    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees/${
        params.id
      }`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'employee'
        },
        method: 'GET'
      }
    )

    const json = await response.json()
    this.setState({
      employee: json
    })
  }

  render() {
    const { employee } = this.state
    return (
      <div>
        <Nav toggleNew={this.toggleNew} newMode={this.newMode} />
        <div>
          {!this.state.newMode ? (
            <div>
              <h2>{employee.name}</h2>
            </div>
          ) : (
            <Form
              text={this.state.text}
              onChange={this.handleChange}
              addItem={this.addItem}
              toggleNew={this.toggleNew}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmployeeInfo

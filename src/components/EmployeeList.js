import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class EmployeeList extends Component {
  render() {
    const { removeEmployee, employees } = this.props

    return (
      <div className="employee">
        <h2>Name</h2>
      </div>
    )
  }
}

export default EmployeeList

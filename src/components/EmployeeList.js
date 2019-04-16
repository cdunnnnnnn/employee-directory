import React, { Component } from 'react'

class EmployeeList extends Component {
  render() {
    const { removeEmployee, employees } = this.props

    return (
      <div>
        {Object.keys(employees).map(employeeID => (
          <div className="employee" key={employeeID}>
            {employees[employeeID]}
            <button
              aria-label="Delete"
              onClick={() => removeEmployee(employeeID)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default EmployeeList

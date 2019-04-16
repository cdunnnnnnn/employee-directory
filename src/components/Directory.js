import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'
import uuidv4 from 'uuid/v4'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: {
        148390: 'Bob Diggler',
        682745: 'Joey Tooshews',
        593847: 'Sammy Stankwich'
      }
    }
  }

  createEmployee = async employeeContent => {
    const uniqueID = uuidv4()

    this.setState({
      employees: {
        ...this.state.employees,
        [uniqueID]: employeeContent
      }
    })
  }

  removeEmployee = async employeeID => {
    const employees = { ...this.state.employees }
    delete employees[employeeID]
    this.setState({ employees })
  }

  render() {
    return (
      <div className="directory">
        <h1>Emplyee Directory</h1>
        <div className="employees">
          <EmployeeList
            employees={this.state.employees}
            removeEmployee={this.removeEmployee}
          />
          <EmployeeForm createEmployee={this.createEmployee} />
        </div>
      </div>
    )
  }
}

export default Directory

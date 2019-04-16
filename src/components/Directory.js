import React, { Component } from 'react'
import EmployeeList from './EmployeeList'
import uuidv4 from 'uuid/v4'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = { employees: {} }
  }

  createEmployee = async employeeContent => {
    const uniqueID = uuidv4()

    this.setState({
      employees: {
        ...this.state.employees,
        [uniqueID]: employeeContent,
      },
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
          <EmployeeList />
        </div>
      </div>
    )
  }
}

export default Directory

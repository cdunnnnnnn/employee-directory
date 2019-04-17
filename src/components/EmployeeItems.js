import React, { Component } from 'react'
import Employee from './Employee'

class EmployeeItems extends Component {
  constructor() {
    super()
    this.state = {
      listItems: []
    }
  }

  render() {
    const employeeEntries = this.props.entries
    const listitems = employeeEntries.map(item => {
      return (
        <Employee
          key={item._id}
          item={item}
          editItem={this.props.editItem}
          deleteItem={this.props.deleteItem}
        />
      )
    })

    return <div>{listitems}</div>
  }
}

export default EmployeeItems

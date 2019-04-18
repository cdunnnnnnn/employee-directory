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
    const filter = this.props.filter
    const listitems = employeeEntries
      .filter(item => {
        return !filter || item.name == filter
      })
      .map(item => {
        return (
          <Employee
            key={item._id}
            item={item}
            editItem={this.props.editItem}
            deleteItem={this.props.deleteItem}
          />
        )
      })

    return <div className="flex flex-wrap">{listitems}</div>
  }
}

export default EmployeeItems

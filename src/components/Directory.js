import React, { Component } from 'react'
import EmployeeItems from './EmployeeItems'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: { name: '' }
    }
  }

  componentDidMount = async () => {
    const response = await fetch(
      'https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees',
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

    this.setState({ items: json })
  }

  handleInput = event => {
    const itemText = event.target.value
    const currentItem = { name: itemText }

    this.setState({
      currentItem
    })
  }

  addItem = async event => {
    event.preventDefault()

    const newItem = this.state.currentItem
    if (newItem.name !== '') {
      const response = await fetch(
        'https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees',
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'employee'
          },
          body: JSON.stringify({ name: newItem.name }),
          method: 'POST'
        }
      )
      const json = await response.json()
      const items = this.state.items

      items.unshift(json)
      this.setState({ items: items })
      this.inputElement.value = ''
    }
  }

  editItem = async (name, id) => {
    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'employee'
        },
        body: JSON.stringify({ name: name }),
        method: 'PUT'
      }
    )

    const json = await response.json()
    this.state.items.forEach(item => {
      if (item._id === json._id) {
        item.name = json.name
      }
    })

    this.setState({ items: this.state.items })
  }

  deleteItem = async id => {
    const filteredItems = this.state.items.filter(item => {
      return item._id !== id
    })

    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'employee'
        },
        method: 'DELETE'
      }
    )

    const json = await response.json()
    if (json.deletedCount === 1) {
      this.setState({ items: filteredItems })
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <input
              placeholder="Add Employee"
              ref={c => {
                this.inputElement = c
              }}
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button onClick={this.addItem}>Add Employee</button>
          </div>
        </div>
        <EmployeeItems
          entries={this.state.items}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default Directory

import React, { Component } from 'react'
import EmployeeItems from './EmployeeItems'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      name: '',
      job_title: '',
      department: '',
      image: ''
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

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  addItem = async event => {
    event.preventDefault()

    const newItem = {
      name: this.state.name,
      job_title: this.state.job_title,
      department: this.state.department,
      image: this.state.image
    }

    if (newItem.name !== '') {
      const response = await fetch(
        'https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees',
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'employee'
          },
          body: JSON.stringify({
            name: newItem.name,
            job_title: newItem.job_title,
            department: newItem.department,
            image: newItem.image
          }),
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
        body: JSON.stringify({
          name: newItem.name,
          job_title: newItem.job_title,
          department: newItem.department,
          image: newItem.image
        }),
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
          <form>
            <input
              name="name"
              placeholder="Full Name"
              ref={el => {
                this.inputElement = el
              }}
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input
              name="job_title"
              placeholder="Job Title"
              ref={el => {
                this.inputElement = el
              }}
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input
              name="department"
              placeholder="Department"
              ref={el => {
                this.inputElement = el
              }}
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input
              name="image"
              placeholder="Image URL"
              ref={el => {
                this.inputElement = el
              }}
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button onClick={this.addItem}>Add Employee</button>
          </form>
        </div>
        <EmployeeItems
          entries={this.state.items}
          getSingleItem={this.getSingleItem}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}

export default Directory

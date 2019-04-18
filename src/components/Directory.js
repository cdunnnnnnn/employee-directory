import React, { Component } from 'react'
import Nav from './Nav'
import Form from './Form'
import EmployeeItems from './EmployeeItems'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMode: false,
      items: [],
      name: '',
      email: '',
      job_title: '',
      company: '',
      department: '',
      location: '',
      image: '',
      bio: '',
      filters: {
        company: {},
        location: {},
        title: {}
      }
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
      email: this.state.email,
      job_title: this.state.job_title,
      company: this.state.company,
      department: this.state.department,
      location: this.state.location,
      image: this.state.image,
      bio: this.state.bio
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
            email: newItem.email,
            job_title: newItem.job_title,
            company: newItem.company,
            department: newItem.department,
            location: newItem.location,
            image: newItem.image,
            bio: newItem.bio
          }),
          method: 'POST'
        }
      )
      const json = await response.json()
      const items = this.state.items

      items.unshift(json)
      this.setState({
        newMode: false,
        items: items
      })

      return this.toggleForm()
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
          name: name
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

  toggleForm = event => {
    event.preventDefault()

    this.setState({ newMode: !this.state.newMode })
  }

  render() {
    return (
      <div>
        <Nav toggleForm={this.toggleForm} newMode={this.state.newMode} />
        <div>
          <br />
          {this.state.newMode && (
            <Form
              onChange={this.handleChange}
              addItem={this.addItem}
              toggleForm={this.toggleForm}
            />
          )}
        </div>
        <div className="pl-2 pr-2">
          <EmployeeItems
            entries={this.state.items}
            getSingleItem={this.getSingleItem}
            editItem={this.editItem}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    )
  }
}

export default Directory

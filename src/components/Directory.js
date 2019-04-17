import React, { Component } from 'react'
import Nav from './Nav'
import EmployeeItems from './EmployeeItems'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMode: false,
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
      this.setState({
        newMode: false,
        items: items
      })
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

  toggleNew = event => {
    event.preventDefault()

    this.setState({ newMode: !this.state.newMode })
  }

  render() {
    return (
      <div>
        <Nav toggleNew={this.toggleNew} newMode={this.newMode} />
        <div>
          {!this.state.newMode ? (
            <div>
              <br />
            </div>
          ) : (
            <form className="mx-auto max-w-sm mt-12 mb-12 pl-2 pr-2">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
                    name="name"
                    placeholder="Jane Doe"
                    ref={el => {
                      this.inputElement = el
                    }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="job_title"
                  >
                    Job Title
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
                    name="job_title"
                    placeholder="Accountant"
                    ref={el => {
                      this.inputElement = el
                    }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="department"
                  >
                    Department
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
                    name="department"
                    placeholder="Accounting"
                    ref={el => {
                      this.inputElement = el
                    }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="image"
                  >
                    Image URL
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
                    name="image"
                    placeholder="http://placekitten.com/400/400"
                    ref={el => {
                      this.inputElement = el
                    }}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={this.addItem}
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </form>
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

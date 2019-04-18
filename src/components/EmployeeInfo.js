import React, { Component } from 'react'
import Nav from './Nav'
import Form from './Form'

class EmployeeInfo extends Component {
  constructor() {
    super()
    this.state = {
      updateMode: false,
      item: '',
      name: '',
      email: '',
      job_title: '',
      company: '',
      department: '',
      location: '',
      image: '',
      bio: ''
    }
  }

  componentDidMount = async () => {
    const {
      match: { params }
    } = this.props

    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees/${
        params.id
      }`,
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
    this.setState({
      item: json
    })
  }

  updateItem = async () => {
    return this.toggleForm()
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  toggleForm = event => {
    console.log(event)
    event.preventDefault()

    this.setState({ updateMode: !this.state.updateMode })
  }

  render() {
    const { item } = this.state

    return (
      <div>
        <Nav toggleForm={this.toggleForm} updateMode={this.state.updateMode} />
        <div>
          <br />
          {this.state.updateMode && (
            <Form
              text={this.state.item}
              onChange={this.handleChange}
              updateItem={this.updateItem}
              toggleForm={this.toggleForm}
            />
          )}
          <div className="p-6">
            <div className="bg-white mx-auto shadow-lg rounded-lg overflow-hidden">
              <div className="sm:flex sm:items-center px-6 py-4">
                {item.image ? (
                  <img
                    className="block h-56 sm:h-64 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                    src={item.image}
                    alt={item.name}
                  />
                ) : (
                  <img
                    className="block h-56 sm:h-64 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                    src="https://d22r54gnmuhwmk.cloudfront.net/rendr-fe/img/default-user-avatar-dc6f2da9.gif"
                    alt={item.name}
                  />
                )}
                <div className="text-center sm:text-left sm:flex-grow">
                  <div className="mb-4">
                    <h1 className="font-normal leading-tight">{item.name}</h1>
                    {item.job_title && (
                      <p className="flex inline-flex items-center bg-grey-lighter leading-none rounded-full px-4 py-2 text-lg font-semibold text-grey-darker mr-2">
                        <span className="flex rounded-full bg-grey-light uppercase px-2 py-1 text-xs font-bold text-grey-darker mr-3">
                          Job Title
                        </span>
                        {item.job_title}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                {item.company && (
                  <span className="flex inline-flex items-center bg-grey-lighter leading-none rounded-full px-4 py-2 text-sm font-semibold text-grey-darker mr-2">
                    <span className="flex rounded-full bg-grey-light uppercase px-2 py-1 text-xs font-bold text-grey-darker mr-3">
                      Company
                    </span>
                    {item.company}
                  </span>
                )}
                {item.department && (
                  <span className="flex inline-flex items-center bg-grey-lighter leading-none rounded-full px-4 py-2 text-sm font-semibold text-grey-darker mr-2">
                    <span className="flex rounded-full bg-grey-light uppercase px-2 py-1 text-xs font-bold text-grey-darker mr-3">
                      Department
                    </span>
                    {item.department}
                  </span>
                )}
                {item.location && (
                  <span className="flex inline-flex items-center bg-grey-lighter leading-none rounded-full px-4 py-2 text-sm font-semibold text-grey-darker mr-2">
                    <span className="flex rounded-full bg-grey-light uppercase px-2 py-1 text-xs font-bold text-grey-darker mr-3">
                      Location
                    </span>
                    {item.location}
                  </span>
                )}
                {item.email && (
                  <span className="flex inline-flex items-center bg-grey-lighter leading-none rounded-full px-4 py-2 text-sm font-semibold text-grey-darker mr-2">
                    <span className="flex rounded-full bg-grey-light uppercase px-2 py-1 text-xs font-bold text-grey-darker mr-3">
                      Email
                    </span>
                    {item.email}
                  </span>
                )}
              </div>
              <div className="px-6 py-4">
                <h2 className="block text-md text-grey-darkest font-normal leading-tight">
                  About
                </h2>
                <p className="text-grey-dark leading-loose">{item.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeInfo

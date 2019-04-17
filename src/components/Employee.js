import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Employee extends Component {
  constructor() {
    super()
    this.state = {
      editMode: false,
      item: ''
    }
  }

  componentDidMount = async () => {
    const id = this.props.item._id
    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/employees/${id}`,
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

  toggleEdit = event => {
    event.preventDefault()

    this.setState({ editMode: !this.state.editMode })
  }

  callUpdateAPI = (event, name) => {
    event.preventDefault()

    if (event.keyCode === 13) {
      this.props.editItem(name, this.props.item._id)
      this.toggleEdit(event)
    }
  }

  render() {
    const item = this.state.item

    return (
      <div
        className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden mb-8"
        key={item._id}
      >
        <div className="sm:flex sm:items-center px-6 py-4">
          <Link to={`/employee/${item._id}/${item.name}`}>
            <img
              className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
              src={item.image}
              alt={item.name}
            />
          </Link>
          {!this.state.editMode ? (
            <div>
              <div className="mb-4">
                <p className="text-xl leading-tight">
                  <Link
                    className="text-grey-darkest no-underline"
                    to={`/employee/${item._id}/${item.name}`}
                  >
                    {item.name}
                  </Link>
                </p>
                <p className="text-sm leading-tight text-grey-dark">
                  {item.job_title}
                </p>
              </div>
              <div>
                <button
                  className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white mr-2"
                  type="submit"
                  onClick={this.toggleEdit}
                >
                  Edit
                </button>
                <button
                  className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
                  type="submit"
                  onClick={() => this.props.deleteItem(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center border-b border-b-2 border-purple py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-xl mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="name_update"
                  defaultValue={item.name}
                  ref={el => {
                    this.inputElement = el
                  }}
                  onKeyUp={event => {
                    this.callUpdateAPI(event, event.target.value)
                  }}
                />
                <button
                  className="flex-no-shrink text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white mr-2"
                  type="submit"
                  onClick={event => {
                    this.props.editItem(
                      this.inputElement.value,
                      this.props.item._id
                    )
                    this.toggleEdit(event)
                  }}
                >
                  Update
                </button>
                <button
                  className="flex-no-shrink text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
                  type="button"
                  onClick={this.toggleEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Employee

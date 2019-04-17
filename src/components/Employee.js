import React, { Component } from 'react'

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
      <li key={item._id}>
        {!this.state.editMode ? (
          <div>
            <span>{item.name}</span>
            <span>{item.job_title}</span>
            <span>{item.department}</span>
            <img src={item.image} alt={item.name} />
          </div>
        ) : (
          <input
            defaultValue={item.name}
            ref={el => {
              this.inputElement = el
            }}
            onKeyUp={event => {
              this.callUpdateAPI(event, event.target.value)
            }}
          />
        )}
        {!this.state.editMode ? (
          <button type="submit" onClick={this.toggleEdit}>
            Edit Employee
          </button>
        ) : (
          <button
            type="submit"
            onClick={event => {
              this.props.editItem(this.inputElement.value, this.props.item._id)
              this.toggleEdit(event)
            }}
          >
            Update
          </button>
        )}{' '}
        <button type="submit" onClick={() => this.props.deleteItem(item._id)}>
          Delete Employee
        </button>
      </li>
    )
  }
}

export default Employee

import React, { Component } from 'react'
import Field from './Field'

class Form extends Component {
  render() {
    return (
      <div className="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
        <div className="animated fadeInUp fixed shadow-inner max-w-lg md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
          <form className="mx-auto max-w-sm mt-12 mb-12 pl-2 pr-2">
            <Field
              type="text"
              name="name"
              label="Full Name"
              placeholder="Jane Doe"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="text"
              name="email"
              label="Email"
              placeholder="hello@example.com"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="text"
              name="job_title"
              label="Job Title"
              placeholder="Accountant"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="text"
              name="company"
              label="Company"
              placeholder="Postlight"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="text"
              name="department"
              label="Department"
              placeholder="Accountant"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="text"
              name="location"
              label="Location"
              placeholder="Planet Earth"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="text"
              name="image"
              label="Image URL"
              placeholder="http://placekitten.com/400/400"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <Field
              type="textarea"
              name="bio"
              label="Short Bio"
              value={this.props.text}
              onChange={this.props.onChange}
            />
            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={this.props.addItem}
                >
                  Add Employee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form

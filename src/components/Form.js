import React, { Component } from 'react'
import Field from './Field'

class Form extends Component {
  render() {
    const { text, onChange } = this.props
    return (
      <div className="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
        <div className="animated fadeInUp fixed shadow-inner max-w-lg md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
          <form className="mx-auto max-w-sm mt-12 mb-12 pl-2 pr-2">
            <Field
              type="text"
              name="name"
              label="Full Name"
              placeholder="Jane Doe"
              value={text && text.name}
              onChange={onChange}
            />
            <Field
              type="text"
              name="email"
              label="Email"
              placeholder="hello@example.com"
              value={text && text.email}
              onChange={onChange}
            />
            <Field
              type="text"
              name="job_title"
              label="Job Title"
              placeholder="Burrito Tailor"
              value={text && text.job_title}
              onChange={onChange}
            />
            <Field
              type="text"
              name="company"
              label="Company"
              placeholder="Chipotle"
              value={text && text.company}
              onChange={onChange}
            />
            <Field
              type="text"
              name="department"
              label="Department"
              placeholder="Kitchen"
              value={text && text.department}
              onChange={onChange}
            />
            <Field
              type="text"
              name="location"
              label="Location"
              placeholder="New York, NY"
              value={text && text.location}
              onChange={onChange}
            />
            <Field
              type="text"
              name="image"
              label="Image URL"
              placeholder="http://placekitten.com/400/400"
              value={text && text.image}
              onChange={onChange}
            />
            <Field
              type="textarea"
              name="bio"
              label="Short Bio"
              value={text && text.bio}
              onChange={onChange}
            />
            <div className="my-2">
              {this.props.addItem ? (
                <button
                  className="block shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                  onClick={this.props.addItem}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="block shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                  onClick={this.props.updateItem}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          <svg
            className="absolute pin-t pin-r mt-3 mr-3 cursor-pointer"
            width="14"
            height="14"
            viewBox="0 0 32 32"
            onClick={this.props.toggleForm}
          >
            <path
              d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"
              fill="#aaa"
            />
          </svg>
        </div>
      </div>
    )
  }
}

export default Form

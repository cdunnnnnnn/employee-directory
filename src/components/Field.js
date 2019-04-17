import React, { Component } from 'react'

class Field extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="md:flex md:items-center mb-6">
        {this.props.type === 'text' ? (
          <>
            <div className="md:w-1/3">
              <label
                className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor={this.props.name}
              >
                {this.props.label}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}
              />
            </div>
          </>
        ) : (
          <>
            <div className="md:w-1/3">
              <label
                className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor={this.props.name}
              >
                {this.props.label}
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                type="text"
                className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
                name={this.props.name}
                ref={el => {
                  this.inputElement = el
                }}
                value={this.props.value}
                onChange={this.props.onChange}
              >
                {this.props.placeholder}
              </textarea>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Field

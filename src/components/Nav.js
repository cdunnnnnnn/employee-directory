import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-indigo-darkest p-6">
          <div className="flex items-center flex-no-shrink text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <Link
                className="text-white no-underline"
                to="/"
                onClick={this.props.resetFilters}
              >
                Employee Directory
              </Link>
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-indigo-lighter border-indigo-light hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </nav>
        <aside className="flex items-center justify-between flex-wrap bg-indigo-dark py-2 px-6">
          {this.props.nameOptions && (
            <div className="inline-block relative w-32 mr-4">
              <select
                className="block appearance-none w-full text-indigo-lightest bg-indigo-darkest border border-indigo-darkest px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={this.props.handleFilters}
              >
                <option value="">Name</option>
                {this.props.nameOptions.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  )
                })}
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow" />
            <button
              className="inline-block w-8 h-8 text-sm px-2 py-2 leading-none border rounded text-teal-lightest font-bold border-teal-dark bg-teal-dark hover:border-teal-darker hover:bg-teal-darker mt-4 lg:mt-0 no-underline"
              onClick={this.props.toggleForm}
            >
              <span className="font-boldest">+</span>
            </button>
          </div>
        </aside>
      </>
    )
  }
}

export default Nav

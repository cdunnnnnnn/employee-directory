import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-indigo-darkest p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link className="text-white no-underline" to="/">
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
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow" />
          <div>
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-lightest font-bold border-indigo-dark bg-indigo-dark hover:border-indigo-darker hover:bg-indigo-darker mt-4 lg:mt-0 no-underline"
              onClick={this.props.toggleNew}
            >
              Toggle Form
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="flex items-center justify-between flex-wrap bg-indigo-darkest p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <p className="text-white text-sm text-center p-4">
            <Link
              className="text-white font-bold"
              to="https://github.com/cdunnnnnnn"
            >
              @cdunnnnnnn
            </Link>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer

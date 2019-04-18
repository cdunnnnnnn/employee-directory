import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

class Page404 extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <div className="text-center">
            <div className="full-w bg-grey-lighter py-24 px-6">
              <h2 className="font-normal font-mono leading-tight">{`{ status: 404, message: "Document Not Found" }`}</h2>
            </div>
            <div className="full-w bg-grey-lightest py-16 px-6">
              <p className="text-lg leading-loose text-grey-dark">
                Oops! We can't find the page you were looking for.
                <span className="block">
                  <Link
                    className="inline-block text-md font-semibold rounded-full px-8 py-3 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white no-underline mt-10"
                    to="/"
                  >
                    Go home
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Page404

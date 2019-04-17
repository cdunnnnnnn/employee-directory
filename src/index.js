import '@babel/polyfill'

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Directory from './components/Directory'
import EmployeeInfo from './components/EmployeeInfo'

import './styles.css'

render(
  <Router>
    <Route exact path="/" component={Directory} />
    <Route path="/employee/:id/:name" component={EmployeeInfo} />
  </Router>,
  document.getElementById('root')
)

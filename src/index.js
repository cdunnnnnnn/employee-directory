import '@babel/polyfill'

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Directory from './components/Directory'
import EmployeeInfo from './components/EmployeeInfo'
import Page404 from './components/Page404'

import './styles.css'

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Directory} />
      <Route path="/employee/:id/:name" component={EmployeeInfo} />
      <Route path="/404" component={Page404} />
      <Route component={Page404} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

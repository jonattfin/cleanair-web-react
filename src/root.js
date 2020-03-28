import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Home, About} from './pages'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

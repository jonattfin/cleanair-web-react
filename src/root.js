import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Home, About, Details} from './pages'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Details}/>
      <Route path="/about" component={About}/>
      <Route path="/details" component={Details}/>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import {apiMiddleware} from 'redux-api-middleware';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './pages/reducers'

export default function configureStore(preloadedState) {
  const middleware = [loggerMiddleware, thunkMiddleware, apiMiddleware]
  const middlewareEnhancer = applyMiddleware(...middleware)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

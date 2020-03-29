import {combineReducers} from 'redux'

import homeReducer from './home/homeDuck'

export default combineReducers({
  home: homeReducer
})

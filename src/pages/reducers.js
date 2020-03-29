import {combineReducers} from 'redux'

import homeReducer from './home/homeDuck'
import detailsReducer from './details/detailsDuck'

export default combineReducers({
  home: homeReducer,
  details: detailsReducer
})

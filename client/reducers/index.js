import {combineReducers} from 'redux'

import weatherData from './weather'
import likesData from './likes'

export default combineReducers({
  weatherData,
  likesData
})

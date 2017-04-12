import {combineReducers} from 'redux'

import subreddits from './subreddits'
import weatherData from './weather'

export default combineReducers({
  subreddits,
  weatherData
})

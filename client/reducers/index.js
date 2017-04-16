import {combineReducers} from 'redux'

import weatherData from './weather'
import likesData from './likes'
import returnOutfits from './returnOutfits'

export default combineReducers({
  weatherData,
  likesData,
  returnOutfits
})

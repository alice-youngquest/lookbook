import {combineReducers} from 'redux'

import weatherData from './weather'
import returnOutfits from './receiveOutfits'
import returnLikes from './receiveLikes'

export default combineReducers({
  weatherData,
  returnOutfits,
  returnLikes
})

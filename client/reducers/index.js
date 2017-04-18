import {combineReducers} from 'redux'

import weatherData from './weather'
import returnOutfits from './receiveOutfits'

export default combineReducers({
  weatherData,
  returnOutfits,
})

import {combineReducers} from 'redux'

import weatherData from './weather'
import outfits from './outfits'

export default combineReducers({
  weatherData,
  outfits,
})

import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import OutfitsByTemp from './OutfitsByTemp'
import WeatherContainer from '../containers/WeatherContainer'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <WeatherContainer />
      <OutfitsByTemp />
    </div>
  )
}

export default Home

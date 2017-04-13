import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import Outfits from './Outfits'
import WeatherContainer from '../containers/WeatherContainer'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <WeatherContainer />
      <Outfits />
    </div>
  )
}

export default Home

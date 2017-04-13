import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import PhotoList from './PhotoList'
import WeatherContainer from '../containers/WeatherContainer'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <p>Home Test</p>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/photo-list' component={PhotoList} />
      </div>
    </Router>
    <WeatherContainer />
    </div>
  )
}

export default Home

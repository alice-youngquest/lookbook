import React from 'react'
import PhotoList from './PhotoList'
import WeatherContainer from '../containers/WeatherContainer'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <p>Home Test</p>
      <PhotoList />
      <WeatherContainer />
    </div>
  )
}

export default Home

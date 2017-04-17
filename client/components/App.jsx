import React from 'react'

import Weather from '../containers/Weather'
import OutfitsList from '../containers/OutfitsList'
import Home from '../components/Home'
import Nav from '../components/Nav'

const App = () => (
  <div className='app-container'>
    <Nav />
    <Weather />
    <OutfitsList />
  </div>
)

export default App

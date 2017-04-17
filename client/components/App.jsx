import React from 'react'

import Weather from '../containers/Weather'
import OutfitsList from '../containers/OutfitsList'
import SearchByTag from '../containers/SearchByTag'
import Home from '../components/Home'
import Nav from '../components/Nav'

const App = () => (
  <div className='app-container'>
    <Nav />
    <Weather />
    <SearchByTag />
    <OutfitsList />
  </div>
)

export default App

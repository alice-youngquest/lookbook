import React from 'react'

import Weather from '../containers/Weather'
import OutfitsList from '../containers/OutfitsList'
import SearchByTag from '../containers/SearchByTag'

const App = () => (
  <div className='app-container'>
    <Weather />
    <SearchByTag />
    <OutfitsList />
  </div>
)

export default App

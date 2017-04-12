import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import Home from './Home'

const App = () => (
  <div className='app-container'>
    <Home />
    <p></p>
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App

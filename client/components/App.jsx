import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Weather from '../containers/Weather'
<<<<<<< HEAD
import Home from './Home'

const App = () => (
  <div className='app-container'>
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/inspo' component={Weather}/>
      </div>
    </Router>
=======
import OutfitsList from '../containers/OutfitsList'
import SearchByTag from '../containers/SearchByTag'

const App = () => (
  <div className='app-container'>
    <Weather />
    <SearchByTag />
    <OutfitsList />
>>>>>>> cc7f4199b3ea2b967cd02cae0f85991e94d04348
  </div>
)

export default App



// <Route path='/outfits' component={OutfitsList}/>
// import OutfitsList from '../containers/OutfitsList'

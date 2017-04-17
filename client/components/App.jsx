import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

import Weather from '../containers/Weather'
import Home from './Home'

const App = () => (
  <div className='app-container'>
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/inspo' component={Weather}/>
      </div>
    </Router>
  </div>
)

export default App

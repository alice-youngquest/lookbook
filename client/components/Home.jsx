import React from 'react'
import {connect} from 'react-redux'
import { HashRouter as Router, Route} from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <div id="circle">
        <div id="text">LOOKBOOK</div>
        <p id="texttwo">A fashion inspiration app based off the weather in your city</p>

        <div id="cityinput">
          <input
            type="text"
            list="cities"
            placeholder="Enter your city .."
            onChange={ e => {showWeather(e, props.dispatch)}}
          />
        <a id="button" href="http://localhost:3000/#/inspo">GO!</a>
        </div>

        <datalist id="cities">
            <option value="Lima" />
            <option value="NewYork" />
            <option value="Cusco" />
            <option value="Wellington" />
            <option value="Auckland" />
            <option value="Melbourne" />
            <option value="Sydney" />
            <option value="London" />
            <option value="Huancayo" />
            <option value="Atlanta" />
            <option value="Gisbourne" />
            <option value="Christchurch" />
        </datalist>


      </div>
    </div>
  )
}

function showWeather (e, dispatch) {
  console.log(e.currentTarget.value)
  console.log(Object.keys(Router))
  if (e.keyCode === 13) {
    dispatch(fetchWeather(e.currentTarget.value.toLowerCase()))
    e.currentTarget.value = ''
  }
}

export default connect()(Home)

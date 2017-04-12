import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/weatherApi'

let Weather = (props) => {
  return (
    <div>
        <p>The weather today is:</p>
        <input
          placeholder="Enter your city .."
          onKeyUp={ e => { showWeather(e, props.dispatch) }}
        />
      <p>{props.weatherData}</p>
    </div>
  )
}

function showWeather (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(fetchWeather(e.currentTarget.value.toLowerCase()))
    e.currentTarget.value = ''
  }
}

Weather = connect()(Weather)

export default Weather

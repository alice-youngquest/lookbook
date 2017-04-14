import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/weatherApi'

let Weather = (props) => {
  return (
    <div>
        <p>The weather today is:</p>
        <input
          placeholder="Enter your city .."
          onKeyUp={ e => { showWeather(e, props.dispatch)}}
        />
      <p>City Name: {props.weatherData.name}</p>
      <p>Forecast: {props.weatherData.weather ? props.weatherData.weather[0].main : ""}</p>
      <p>Description: {props.weatherData.weather ? props.weatherData.weather[0].description : ""}</p>
      <p>Temperature: {props.weatherData.main ? props.weatherData.main.temp : ""}</p>
    </div>
  )
}

function showWeather (e, dispatch) {
  console.log(e.currentTarget.value)
  if (e.keyCode === 13) {
    dispatch(fetchWeather(e.currentTarget.value.toLowerCase()))
    e.currentTarget.value = ''
  }
}

Weather = connect()(Weather)

export default Weather

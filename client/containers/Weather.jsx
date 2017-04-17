import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/index'

const Weather = (props) => {
  return (
    <div className="weatherbox" >
        <input
          type="text"
          id="cityinput"
          list="cities"
          placeholder="Enter your city .."
          onKeyUp={ e => { showWeather(e, props.dispatch)}}
        />

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

      <div id="cityName">
        City Name: {props.weatherData.name}
      </div>
      <div id="forecast">
        Forecast: {props.weatherData.weather ? props.weatherData.weather[0].main : ""}
      </div>
      <div id="forecastDescription">
        Description: {props.weatherData.weather ? props.weatherData.weather[0].description : ""}
      </div>
      <div id="temperature">
        Temperature: {props.weatherData.main ? Math.floor(props.weatherData.main.temp) : ""}°C
      </div>
      <div id="icon">
        {props.weatherData.weather ? props.weatherData.weather[0].icon : ""}
        <img src="http://openweathermap.org/img/w/10d.png" />
      </div>
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

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData
  }
}

export default connect(mapStateToProps)(Weather)

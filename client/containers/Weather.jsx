import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/index'
import OutfitsList from './OutfitsList'
import SearchByTag from './SearchByTag'
import Skycons from 'react-skycons'

const Weather = (props) => {
  let iconCode = props.weatherData.weather ? props.weatherData.weather[0].icon : ""
  let iconTag = tagForIconCode(iconCode)

  return (
  <div className="weatherpage" >
     <div className="weatherbox">
        <a href="/" className="title">LOOKBOOK</a>
        <div className="cityName">
          {props.weatherData.name}
        </div>
        <div className="forecast">
          {props.weatherData.weather ? props.weatherData.weather[0].main : ""}
        </div>
        <div className="temperature" data-temp={props.weatherData.main ? Math.floor(props.weatherData.main.temp) : ""}>
          {props.weatherData.main ? Math.floor(props.weatherData.main.temp) : ""}°C
        </div>
        <div className="weatherIcon">
           <Skycons color='black' icon={iconTag}/>
        </div>
        <SearchByTag />
     </div>
   <OutfitsList />
  </div>
  )
}

function tagForIconCode(iconCode) {
  let map = {
    '01d': 'CLEAR_DAY',
    '01n': 'CLEAR_NIGHT',
    '02d': 'CLOUDY',
    '02n': 'PARTLY_CLOUDY_NIGHT',
    '03d': 'CLOUDY',
    '03n': 'PARTLY_CLOUDY_NIGHT',
    '04d': 'CLOUDY',
    '04n': 'PARTLY_CLOUDY_NIGHT',
    '09d': 'RAIN',
    '09n': 'RAIN',
    '10d': 'RAIN',
    '10m': 'RAIN',
    '13d': 'SNOW',
    '13n': 'SNOW',
  }
  return map[iconCode] ? map[iconCode] : 'CLEAR_NIGHT'
}

function showWeather (e, dispatch) {
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

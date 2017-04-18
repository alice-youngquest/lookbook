import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/index'
import OutfitsList from './OutfitsList'
import Nav from '../components/Nav'
import SearchByTag from './SearchByTag'
import Skycons from 'react-skycons'


const Weather = (props) => {
  let iconCode = props.weatherData.weather ? props.weatherData.weather[0].icon : ""
  let iconTag = tagForIconCode(iconCode)

  return (
  <div className="weatherpage" >
     <div className="weatherbox">
        <input
          type="text"
          id="citymenu"
          list="cities"
          placeholder="Enter your city .."
          onKeyUp={ e => { showWeather(e, props.dispatch)}}
        />
      <datalist id="cities">
          <option value="Lima" />
          <option value="New York" />
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
      <div id="title">LOOKBOOK</div>
      <div id="cityName">
        City: {props.weatherData.name}
      </div>
      <div id="forecast">
        Forecast: {props.weatherData.weather ? props.weatherData.weather[0].main : ""}
      </div>
      <div id="temperature">
        Temperature: {props.weatherData.main ? Math.floor(props.weatherData.main.temp) : ""}°C
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
    '01n': 'CLEAR_DAY',
    '03n': 'CLOUDY',
    '10n': 'RAIN',
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

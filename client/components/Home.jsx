import React from 'react'
import {connect} from 'react-redux'

import {fetchWeather} from '../actions/index'

const Home = (props) => {
  return (
    <div>
      <div id="circle">
        <div id="text">LOOKBOOK</div>
        <p id="texttwo">A fashion inspiration app based off the weather in your city</p>
        <form onSubmit={ e => {showWeather(e, props)}} id="cityinput">
          <input
            type="text"
            list="cities"
            placeholder="Enter your city .."
          />
        </form>
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

function showWeather (e, props) {
  e.preventDefault()
    props.history.push("/lookbook")
    props.dispatch(fetchWeather(e.currentTarget.children[0].value.toLowerCase()))
    e.currentTarget.value = ''
}

export default connect()(Home)

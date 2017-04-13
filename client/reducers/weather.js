function weatherData (state = "", action) {
  switch (action.type) {
    case 'RECEIVE_WEATHER':

      return (
        action.weather
      )

    default:
      return state
  }
}

export default weatherData

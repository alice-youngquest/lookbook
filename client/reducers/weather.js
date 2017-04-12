function weatherData (state = "", action) {
  switch (action.type) {
    case 'RECEIVE_WEATHER':
      return (
        action.main
      )

    default:
      return state
  }
}

export default weatherData

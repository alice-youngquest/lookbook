import request from 'superagent'

export const receiveWeather = (weather) => {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}

export function fetchWeather (searchTerm) {
  return (dispatch) => {
    request
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=d7379debce2e70976673a060a36c7535&mode=json&units=metric
`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveWeather(res.body))
      })
  }
}

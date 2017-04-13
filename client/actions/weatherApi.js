import request from 'superagent'

export const receiveWeather = (weather) => {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}

export function fetchWeather (weatherData) {
  return (dispatch) => {
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?id=2179537&APPID=d7379debce2e70976673a060a36c7535
`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res.body.name, res.body.weather[0].main, res.body.main.temp);
        dispatch(receiveWeather(res.body))
      })
  }
}

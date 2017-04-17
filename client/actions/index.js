import request from 'superagent'

//WEATHER

export function fetchWeather (searchTerm) {
  return (dispatch) => {
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=d7379debce2e70976673a060a36c7535&mode=json&units=metric
`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        // dispatch fetchOutfits(temp)
        dispatch(fetchOutfits(Math.floor(res.body.main.temp)))
        dispatch(receiveWeather(res.body))
      })
  }
}

export const receiveWeather = (weather) => {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}

//OUTFITS

export function fetchOutfits (temp) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/v1/outfits?temp=${temp}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveOutfits(res.body))
      })
  }
}

export const receiveOutfits = (outfits) => {
  return {
    type: 'RECEIVE_OUTFITS',
    outfits: outfits.map(outfit => outfit)
  }
}

//INCREASE LIKES

export const incrLikes = (id, likes) => {
    console.log('id: ', id, 'likes: ', likes);
  return {
    type: 'INCR_LIKES',
    id,
    likes
  }
}

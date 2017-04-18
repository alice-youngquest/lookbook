import request from 'superagent'

//WEATHER

export function fetchWeather (searchTerm) {
  return (dispatch) => {
    request
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=d7379debce2e70976673a060a36c7535&mode=json&units=metric`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(fetchOutfitsByTemp(Math.floor(res.body.main.temp)))
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

export function fetchOutfitsByTemp (temp) {
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

export function fetchOutfitsByTag (tag) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/v1/outfits?tag=${tag}`)
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

export function fetchOutfitsByTempAndTag (temp, tag) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/v1/outfits?temp=${temp}&tag=${tag}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveOutfits(res.body))
      })
  }
}

//INCREASE LIKES

export const increaseLikes = (id) => {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/v1/outfits/likes/${id}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveLikes(res.body))
      })
  }
}

export const receiveLikes = (likedOutfit) => {
  return {
    type: 'RECEIVE_LIKES',
    updatedOutfit: likedOutfit
  }
}

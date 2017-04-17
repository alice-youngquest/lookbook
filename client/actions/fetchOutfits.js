import request from 'superagent'

export const receiveOutfits = (outfits) => {
  return {
    type: 'RECEIVE_OUTFITS',
    outfits: outfits.map(outfit => outfit)
  }
}

export function fetchOutfits (temperature) {
  // if temperature undefined GET /outfits
  // if (temperature) GET /outfits?temp=${temperature}

  return (dispatch) => {
    request
      .get(`http://localhost:3000/v1/${dbQuery}`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveOutfits(res.body))
      })
  }
}

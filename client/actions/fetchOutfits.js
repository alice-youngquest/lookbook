import request from 'superagent'

export const receiveOutfits = (outfits) => {
  return {
    type: 'RECEIVE_OUTFITS',
    outfits: outfits.map(outfit => outfit)
  }
}

export function fetchOutfits (dbQuery) {
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

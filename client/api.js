import request from 'superagent'

const apiUrl = 'http://localhost:3000/v1'

export const listAllOutfits = (callback) => {
  request
    .get(`${apiUrl}/all_outfits`)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
  })
}

export const listOutfitsByTemp = (callback) => {
  request
    .get(`${apiUrl}/outfits_by_temp`)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
  })
}

import request from 'superagent'

const apiUrl = 'http://localhost:3000/v1'

export const getTeam = (callback) => {
  request
    .get(`${apiUrl}/outfits`)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
  })
}

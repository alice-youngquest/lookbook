const request = require('superagent')
const express = require('express')
const router = express.Router()

router.get('/:city', function (req, res){
  request
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${process.env.OPEN_WEATHER_KEY}&mode=json&units=metric
`)
    .end((err, result) => {
      if (err) {
        res.status(500).text(err.message)
        return
      }
      res.json(result.body)
    })
})

module.exports = router

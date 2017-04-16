var express = require('express')
var router = express.Router()

var db = require('../db')
var listOutfitsByTemp = require('../db')

router.get('/', function (req, res) {
  db.listOutfitsByTemp().then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router

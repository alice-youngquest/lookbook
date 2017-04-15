var db = require('./db')
var express = require('express')
var listAllOutfits = require('./db')
var listOutfitsByTemp = require('./db')
var router = express.Router()

router.get('/', function (req, res) {
  db.listAllOutfits().then((data) => {
    res.json(data)
  })
})

router.get('/:temp', function (req, res) {
  const temp = Number(req.params.temp)
  db.listOutfitsByTemp(temp).then((data) => {
    res.json(data)
  })
})

module.exports = router

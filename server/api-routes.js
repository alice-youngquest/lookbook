var db = require('./db')
var express = require('express')
var listAllOutfits = require('./db')
var listOutfitsByTemp = require('./db')
var router = express.Router()

router.get('/', function (req, res) {
  const temp = parseInt(req.query.temp)
  if('/' + temp){
    db.listOutfitsByTemp().then((data) => {
      res.json(data)
    })
  } else {
    db.listAllOutfits().then((data) => {
      res.json(data)
    })
  }
})

module.exports = router

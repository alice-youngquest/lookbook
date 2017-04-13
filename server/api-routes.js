var db = require('./db')
var express = require('express')
var listAllOutfits = require('./db')
var router = express.Router()

router.get('/', function (req, res) {
  console.log(db);
  db.listAllOutfits().then((data) => {
    res.json(data)
  })
})

module.exports = router

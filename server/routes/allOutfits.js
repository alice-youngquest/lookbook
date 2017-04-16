var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .get(function (req, res) {
    db.listAllOutfits().then((data) => {
      res.send(data)
  })
  .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router

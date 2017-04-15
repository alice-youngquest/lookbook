var express = require('express')
var router = express.Router()

var db = require('../db')
var listAllOutfits = require('../db')

// router.get('/', function (req, res) {
//   const temp = parseInt(req.query.temp)
//   if('/' + temp){
//     db.listOutfitsByTemp().then((data) => {
//       res.json(data)
//     })
//   } else {
//     db.listAllOutfits().then((data) => {
//       res.json(data)
//     })
//   }
// })

router.get('/', function (req, res) {
  db.listAllOutfits().then((data) => {
    res.json(data)
  })
  .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router

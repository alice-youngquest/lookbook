const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  db.getOutfitsByTemp().then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router

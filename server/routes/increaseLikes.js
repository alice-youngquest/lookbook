const express = require('express')
const router = express.Router()

const db = require('../db')

router.route('/')
  .put(function (req, res) {
    db.incrementLikes(req.body.likes).then(() => {
      res.send()
  })
  .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router

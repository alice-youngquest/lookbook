const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  const options = {
    temp: parseInt(req.query.temp, 10),
    tag: req.query.tag
  }
  db.getOutfits(options).then((data) => {
    res.json(data)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err)
  })
})

router.post('/likes/:id', function (req, res) {
    db.incrementLikes(req.params.id, req.body.likes).then((outfits) => {
      res.json(outfits)
  })
  .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router

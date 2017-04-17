const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/outfits', function (req, res) {
    db.getAllOutfits().then((data) => {
      res.json(data)
  })
  .catch((err) => {
      res.status(500).send(err)
    })
})

router.get('/outfits?temp=', function (req, res) {
  const temp = req.query.temp
  db.getOutfitsByTemp(temp).then((data) => {
    res.json(data)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router


// REST outfits by temp

// GET /outfits
  // -> all outfits
  // GET /outfits?temp=16
  // const temp = req.query.temp
  // -> db.getOutfitsByTemp(temp)
  // res.json
//

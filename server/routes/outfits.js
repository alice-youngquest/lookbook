const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
const options = {temp: parseInt(req.query.temp, 10)}
    db.getOutfits(options).then((data) => {
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

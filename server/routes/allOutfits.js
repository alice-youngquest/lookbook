const express = require('express')
const router = express.Router()

const db = require('../db')

router.route('/')
  .get(function (req, res) {


    db.getAllOutfits().then((data) => {
      res.send(data)
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

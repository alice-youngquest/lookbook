const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const allOutfits = require('./routes/allOutfits')
const outfitsByTemp = require('./routes/outfitsByTemp')
const increaseLikes = require('./routes/increaseLikes')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/outfits', allOutfits)
server.use('/v1/outfitsByTemp', outfitsByTemp)
server.use('/v1/increaseLikes', increaseLikes)

module.exports = server

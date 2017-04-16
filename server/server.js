var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var allOutfits = require('./routes/allOutfits')
var outfitsByTemp = require('./routes/outfitsByTemp')

var server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/all_outfits', allOutfits)
server.use('/v1/outfits_by_temp', outfitsByTemp)

module.exports = server

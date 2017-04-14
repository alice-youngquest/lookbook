var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var outfits = require('./api-routes')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/outfits', outfits)

module.exports = server

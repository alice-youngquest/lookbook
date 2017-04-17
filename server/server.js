const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const outfits = require('./routes')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/outfits', outfits)

module.exports = server

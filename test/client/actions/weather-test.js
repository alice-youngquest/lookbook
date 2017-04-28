var test = require('tape')
var nock = require('nock')
var sinon = require('sinon')

import {fetchWeather} from '../../../client/actions/index.js'


var exampleResponse = {"coord":{"lon":174.78,"lat":-41.29},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":13,"pressure":1020,"humidity":82,"temp_min":13,"temp_max":13},"visibility":10000,"wind":{"speed":4.6,"deg":20},"clouds":{"all":0},"dt":1492547400,"sys":{"type":1,"id":8295,"message":0.0091,"country":"NZ","sunrise":1492455304,"sunset":1492494271},"id":2179537,"name":"Wellington","cod":200}

nock('http://localhost')
  .get('/v1/weather/wellington')
  .reply(200, exampleResponse)

test('fetchWeather action', function(t) {
  var dispatch = sinon.stub()
  dispatch.onCall(0).callsFake(function(action) {
    //returns the fetchOutfitsByTemp action creator
    t.equal(typeof(action), 'function')
  })
  //fetch
  dispatch.onCall(1).callsFake(function(action) {
    t.equal(action.type, 'RECEIVE_WEATHER')
    t.equal(action.weather.main.temp, 13)
    t.end()
  })
 fetchWeather('wellington')(dispatch)
})


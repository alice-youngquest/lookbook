var request = require('supertest')
var cheerio = require('cheerio')
var test = require('tape')

var app = require('../../server/server')

test('GET /v1/outfits', function (assert) {
  request(app)
    .get('/v1/outfits')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      var expectedIds = [ 1, 2]
      var actualIds = res.body.map((record) => (record.outfitId));

      assert.error(err, 'No error');
      assert.same(actualIds, expectedIds, 'Retrieve list of things');
      assert.end();
    });
});

test('GET /v1/outfits/[temp]', function (assert) {
  request(app)
    .get('/v1/outfits/10')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      var expectedIds = [ 1 ]
      var actualIds = res.body.map((record) => (record.outfitId));

      assert.error(err, 'No error');
      assert.same(actualIds, expectedIds, 'Only returns results which match temp');
      assert.end();
    });
});

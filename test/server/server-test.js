const request = require('supertest')
const cheerio = require('cheerio')
const test = require('tape')

const app = require('../../server/server')

test('GET /v1/outfits', function (assert) {
  request(app)
    .get('/v1/outfits')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      const expectedIds = [ 1, 2]
      const actualIds = res.body.map((record) => (record.outfitId));

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
      const expectedIds = [ 1 ]
      const actualIds = res.body.map((record) => (record.outfitId));

      assert.error(err, 'No error');
      assert.same(actualIds, expectedIds, 'Only returns results which match temp');
      assert.end();
    });
});

var supertest = require('supertest')
var cheerio = require('cheerio')
var test = require('tape')

var app = require('../../server/api-routes')

test('GET /', function (assert) {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      var expectedThings = [
        {id: 1, photo_url: 'http://fashion.ekstrax.com/wp-content/uploads/2015/04/Unboring-Fashion-ideas-from-Tumblr-9.jpg', temperature: '10-15'},
        {id: 2, photo_url: 'http://2.bp.blogspot.com/-IaK8yXZ4SwM/VO1WqPp7mtI/AAAAAAAACIk/IBlnyGuspHY/s1600/chloe%2Bsuzanna%2Bboots-1.jpg', temperature: '15-20'}
      ];
      var actualThings = res.body;

      assert.error(err, 'No error');
      assert.same(actualThings, expectedThings, 'Retrieve list of things');
      assert.end();
    });
});

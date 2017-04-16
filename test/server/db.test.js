const test = require('ava')
var testConfig = require('../../knexfile').test
var knex = require('knex')
var db = require('../../server/db')

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
test.beforeEach(function (t) {
  console.log('Running migrations')
  t.context.db = knex(testConfig)
  return t.context.db.migrate.latest()
    .then(function () {
      console.log('Seeding')
      return t.context.db.seed.run()
    })
})

// Destroy the database connection after each test.
test.afterEach(function (t) {
  t.context.db.destroy()
})

test('Get image by temperature', function (t) {
  var expectedImage = [{
    id: 0,
    likes: 0,
    photoUrl: 'http://fashion.ekstrax.com/wp-content/uploads/2015/04/Unboring-Fashion-ideas-from-Tumblr-9.jpg'
  }]
  return db.listOutfitsByTemp(14)
    .then(function (image) {
      console.log(image)
      t.deepEqual(image, expectedImage)
    })
})

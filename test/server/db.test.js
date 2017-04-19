const test = require('ava')
const testConfig = require('../../knexfile').test
const knex = require('knex')
const db = require('../../server/db')

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
test.beforeEach(function (t) {
  console.log('running migrations')
  t.context.db = knex(testConfig)
  return t.context.db.migrate.latest()
    .then(function () {
      console.log('seeding')
      return t.context.db.seed.run()
    })
})

// Destroy the database connection after each test.
test.afterEach(function (t) {
  t.context.db.destroy()
})

test('get image by temperature', function (t) {
  const expectedImage = {
    id: 0,
    photoUrl: 'https://static.pexels.com/photos/63917/pexels-photo-63917.jpeg',
    likes: 0
  }
  return db.getOutfitsByTemp(7)
    .then(function (outfits) {
      t.deepEqual(outfits[0], expectedImage)
    })
})

const test = require('tape')
const request = require('supertest')

const app = require('../../server/server')
// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.


app.get('knex').migrate.latest().then(function () {
  app.get('knex').seed.run().then(() => {
    // Destroy the database connection after each test.

    test('GET /v1/outfits', function (t) {
      request(app)
        .get('/v1/outfits')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            console.log((res.body.length));
            t.equal(81, res.body.length, 'returns all outfits')
            t.end()
        });
    });

    test('GET /v1/outfits?temp=14', function (t) {
      request(app)
        .get('/v1/outfits?temp=14')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          outfitsMatchTemp(res.body, 14, t)
          t.equal(19, res.body.length, 'returns all items')
          t.end()
        });
    });

    test('GET /v1/outfits?tag=snowy', function (t) {
      request(app)
        .get('/v1/outfits?tag=snowy')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          t.equal(11, res.body.length, 'retuns all snowy items')
          t.end()
        })
    })

    test('GET /v1/outfits?tag=snowy&temp=7', function (t) {
      request(app)
        .get('/v1/outfits?tag=snowy&temp=7')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          app.get('knex')('join')
              .join('tags', 'join.tags_id', '=', 'tags.id')
              .where('tags.tag', '=', 'snowy')
              .select('join.outfits_id').then((db_res) => {
                let snowy_ids = db_res.map((result) => result.outfits_id)
                res.body.forEach((result) => {
                  t.true(snowy_ids.includes(result.id), 'result has correct tag')
                })
              })

          outfitsMatchTemp(res.body, 7, t)
          t.end()
        })
    })

    test('clean up', function (t) {
      app.get('knex').destroy()
      t.end()
    })
  })
})

function outfitsMatchTemp(outfits, temp, t) {
  let outfitsOutsideOfRange = outfits.filter((outfit) => {
    return (outfit.t_max < temp || outfit.t_min > temp)
  })
  t.equal(0, outfitsOutsideOfRange.length, 'all items are not outside of range')

  let outfitsInsideOfRange = outfits.filter((outfit) => {
    return (outfit.t_max >= temp && outfit.t_min <= temp)
  })
  t.equal(outfitsInsideOfRange.length, outfits.length, 'all items are inside of range')
}

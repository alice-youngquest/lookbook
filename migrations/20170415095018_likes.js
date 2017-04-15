exports.up = function (knex, Promise) {
  return knex.schema.table('outfits', function (table) {
    table.integer('likes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('outfits', function (table) {
    table.dropColumn('likes')
  })
}

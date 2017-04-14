
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('outfits', function (table) {
    table.increments('id').primary()
    table.string('photo_url')
    table.integer('t_max')
    table.integer('t_min')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('outfits')
};

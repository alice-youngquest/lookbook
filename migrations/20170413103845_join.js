
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('join', function (table) {
    table.increments('id').primary()
    table.integer('tags_id')
    table.integer('outfits_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('join')
};

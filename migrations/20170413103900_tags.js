
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('tags', function (table) {
    table.increments('id').primary()
    table.string('tag')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
};

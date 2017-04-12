var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  listAllOutfits,
}

function listAllOutfits () {
  return knex('outfits').select('id', 'photo_url')
}

function listOutfitsByTemp (temperature) {
  return knex('outfits')
    .where('outfits.temp', temperature)
    .select('id', 'photo_url')
}

function listOutfitsByTemp (tag) {
  return knex('join')
    .where('join.temp', tag)
    .select('id', 'photo_url')
}

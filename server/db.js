var development = require('./knexfile').development
var db = require('knex')(development)

module.exports = {
  listAllOutfits,
  listOutfitsByTemp,
  listOutfitsByTag
}

function listAllOutfits () {
  return db('outfits').select('id', 'photo_url')
}

//unfinsihed
function listOutfitsByTemp (temperature) {
  return db('outfits')
    .where('outfits.temp', temperature)
    .select('id', 'photo_url')
}

//unfinsihed
function listOutfitsByTag (tag) {
  return db('join')
    .where('join.tags_id', tag)
    .select('id', 'photo_url')
}

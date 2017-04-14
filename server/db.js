var development = require('../knexfile').development
var db = require('knex')(development)

function listOutfitsByTemp (temperature = 14) {
  return db('outfits')
    .where('t_min', '<', temperature)
    .andWhere('t_max', '>', temperature)
    .select('id as outfitId', 'photo_url as photoUrl')
}

function listAllOutfits () {
  return db('outfits')
    .select('outfits.id as outfitId', 'outfits.photo_url as photoUrl')
}

//unfinsihed
function listOutfitsByTag (tag) {
  return db('join')
    .where('join.tags_id', tag)
    .select('id', 'photo_url')
}

module.exports = {
  listAllOutfits,
  listOutfitsByTemp,
  listOutfitsByTag
}

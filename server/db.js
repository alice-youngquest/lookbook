var development = require('../knexfile').development
var db = require('knex')(development)

function getImageByTemp (temperature = 15) {
  return db('outfits')
    .where('t_min', '<', temperature)
    .andWhere('t_max', '>', temperature)
    .select('id', 'photo_url')
}

function listAllOutfits () {
  return db('outfits')
    .select('outfits.id as outfitId', 'outfits.photo_url as photoUrl')
}

//unfinsihed
function listOutfitsByTemp (temperature) {
  return db('outfits')
    .where('t_min', '<=', temperature)
    .andWhere('t_max', '>=', temperature)
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
  listOutfitsByTag,
  getImageByTemp
}

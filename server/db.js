var development = require('../knexfile').development
var db = require('knex')(development)

module.exports = {
  listAllOutfits,
  listOutfitsByTemp
}

function listAllOutfits () {
  return db('outfits')
    .select('outfits.id', 'outfits.photo_url as photoUrl', 'likes')
}

function listOutfitsByTemp (temperature = 14) {
  return db('outfits')
  .where('t_min', '<', temperature)
  .andWhere('t_max', '>', temperature)
  .select('id', 'photo_url as photoUrl', 'likes')
}

const env = process.env['NODE_ENV'] || 'development'
const config = require('../knexfile.js')[env]
const db = require('knex')(config)

module.exports = {
  getAllOutfits,
  getOutfitsByTemp,
  incrementLikes
}

function getAllOutfits () {
  return db('outfits')
    .select('id', 'outfits.photo_url as photoUrl', 'likes')
}

function getOutfitsByTemp (temperature = 14) {
  return db('outfits')
  .where('t_min', '<=', temperature)
  .andWhere('t_max', '>=', temperature)
  .select('id', 'photo_url as photoUrl', 'likes')
}

function incrementLikes(id) {
  return db('outfits')
  .where('id', '=', id)
  .increment('likes', 1)
}

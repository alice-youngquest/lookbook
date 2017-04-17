const env = process.env['NODE_ENV'] || 'development'
const config = require('../knexfile.js')[env]
const db = require('knex')(config)

module.exports = {
  getOutfits,
  getAllOutfits,
  getOutfitsByTemp,
  incrementLikes,
}

function getOutfits (options) {
  if(options.temp) {
    return getOutfitsByTemp(options.temp)
  } else {
    return getAllOutfits()
  }
}

function getAllOutfits () {
  return db('outfits')
    .select('id', 'outfits.photo_url as photoUrl', 'likes')
}

function getOutfitsByTemp (temp) {
  return db('outfits')
  .where('t_min', '<=', temp)
  .andWhere('t_max', '>=', temp)
  .select('id', 'photo_url as photoUrl', 'likes')
}

function incrementLikes(id) {
  return db('outfits')
  .where('id', '=', id)
  .increment('likes', 1).then(function () {
    return db('outfits').first()
  })
}

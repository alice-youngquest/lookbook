const env = process.env['NODE_ENV'] || 'development'
const config = require('../knexfile.js')[env]
const db = require('knex')(config)

module.exports = {
  getOutfits,
  getAllOutfits,
  getOutfitsByTemp,
  getTagIdByTagName,
  getOutfitsByTag,
  incrementLikes,
  getOutfitsByTempAndTag
}

function getOutfits (options) {
  if (options.temp && options.tag) {
    return getOutfitsByTempAndTag(options.temp, options.tag)
  } else if (options.temp) {
    return getOutfitsByTemp(options.temp)
  } else if (options.tag) {
    return getTagIdByTagName(options.tag)
      .then(getOutfitsByTag)
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

function incrementLikes (id) {
  return db('outfits')
    .where('id', '=', id)
    .increment('likes', 1)
      .then(function () {
        return db('outfits').first()
      })
}

function getTagIdByTagName (tag) {
  return db('tags')
    .where('tag', '=', tag)
    .select('id')
}

function getOutfitsByTag (tagObj) {
  let tagId = tagObj[0].id
  return db.select('outfits.id', 'tag', 'photo_url as photoUrl', 'likes')
    .from('join')
      .join('tags', function() {
        this.on('join.tags_id', '=', 'tags.id')
          .andOn('join.tags_id', '=', tagId)
      })
    .join('outfits', 'join.outfits_id', '=', 'outfits.id')
}

function getOutfitsByTempAndTag (temp, tag) {

}

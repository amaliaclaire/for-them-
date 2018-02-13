let knex = require('../db')

function allAlbums () {
  return knex('albums')
}

function singleAlbum (id) {
  return knex('albums')
  .where('id', id)
  .first()
}

function createSingleAlbum (title, image, dedicated_to, user_id) {
  return knex('albums')
  .insert({
    title,
    image,
    dedicated_to,
    user_id
  })
}

module.exports = {allAlbums, singleAlbum, createSingleAlbum}

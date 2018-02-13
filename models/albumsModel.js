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

function updateSingleAlbum (id, album) {
  return knex('albums')
  .update(album)
  .where('id', id)
}

function deleteSingleAlbum (id) {
  return knex('albums')
  .where('id', id)
  .del()
}
module.exports = {allAlbums, singleAlbum, createSingleAlbum, updateSingleAlbum, deleteSingleAlbum}

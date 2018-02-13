let knex = require('../db')

function allAlbums () {
  return knex('albums')
}

module.exports = {allAlbums}

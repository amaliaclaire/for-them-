let knex = require('../db')

function getAllContents () {
  return knex('contents')
}

function getSingleContent (id) {
  return knex('contents')
  .where('id', id)
  .first()
}

function createSingleContent(title, content_type, image, category) {
  return knex('contents')
  .insert({
    title,
    content_type,
    image,
    category
  })
}

module.exports = {getAllContents, getSingleContent, createSingleContent}

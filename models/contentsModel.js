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

function updateSingleContent(id, content) {
  return knex('contents')
  .update(content)
  .where('id', id)
}

function deleteSingleContent(id) {
  return knex('contents')
  .where('id', id)
  .del()
}
module.exports = {getAllContents, getSingleContent, createSingleContent, updateSingleContent, deleteSingleContent}

let knex = require('../db')

// USERS
function allUsers () {
  return knex('users')
}

function getOneUser (id) {
  return knex('users')
  .where('id', id)
  .first()
}

function createUser (name, avatar, album_id) {
  return knex('users')
  .insert({
    name,
    avatar,
    album_id
  })
}

function deleteUser (id) {
  return knex('users')
  .where('id', id)
  .del()
}

// Albums 


module.exports = {allUsers, getOneUser, createUser, deleteUser}

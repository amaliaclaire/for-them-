let knex = require('../db')

function allUsers () {
  return knex('users')
}

function getOneUser (id) {
  return knex('users')
  .where('id', id)
  .first()
}
module.exports = {allUsers, getOneUser}

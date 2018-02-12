let knex = require('../db')

function allUsers () {
  return knex('users')
}

module.exports = {allUsers}

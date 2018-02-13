let knex = require('../db')

function getAllContents () {
  return knex('contents')
}


module.exports = {getAllContents}

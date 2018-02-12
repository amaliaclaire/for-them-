let forThemModel = require('../models/forThem.js')

function allUsersController (req, res, next) {
  forThemModel.allUsers()
  .then(users => {
    res.json(users)
  }).catch(err => next(err))
}

module.exports = {allUsersController}

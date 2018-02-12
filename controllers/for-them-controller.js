let forThemModel = require('../models/forThem.js')

function allUsersController (req, res, next) {
  forThemModel.allUsers()
  .then(users => {
    res.json(users)
  }).catch(err => next(err))
}

function getOneController (req, res, next) {
  let id = req.params.id
  forThemModel.getOneUser(id)
  .then(users => {
    res.json(users)
    console.log('here is user', user);
  }).catch(err => next(err))
}

module.exports = {allUsersController, getOneController}

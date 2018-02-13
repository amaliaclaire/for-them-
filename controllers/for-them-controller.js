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

function createUserController (req, res, next) {
  let {name, avatar, album_id} = req.body
  console.log('the body', req.body)
  forThemModel.createUser(name, avatar, album_id)
  .then(user => {
    res.json(user)
  }).catch(err => next(err))
}

function deleteUserController (req, res, next) {
  let id = req.params.id
  forThemModel.deleteUser(id)
  .then(users => {
    res.json(users)
  }).catch(err => next(err))
}

module.exports = {allUsersController, getOneController, createUserController, deleteUserController}

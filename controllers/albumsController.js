let albumsModel = require('../models/albumsModel.js')

function getAllAlbums (req, res, next) {
  albumsModel.allAlbums()
  .then(albums => {
    res.json(albums)
  }).catch(err => next(err))
}


function getOneAlbum(req, res, next) {
  let id = req.params.id
  albumsModel.singleAlbum(id)
  .then(albums => {
    console.log(albums);
    res.json(albums)
  }).catch(err => next (err))
}

function createAlbum (req, res, next) {
  let {title, image, dedicated_to, user_id} = req.body
  albumsModel.createSingleAlbum(title, image, dedicated_to, user_id)
  .then(album => {
    console.log('HERE IS ALBUM', album);
    res.json(album)
  }).catch(err => next (err))
}

function createUserController (req, res, next) {
  let {name, avatar, album_id} = req.body
  forThemModel.createUser(name, avatar, album_id)
  .then(user => {
    res.json(user)
  }).catch(err => next(err))
}




module.exports = {getAllAlbums, getOneAlbum, createAlbum}

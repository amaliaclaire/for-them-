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


function updateAlbum (req, res, next) {
  // console.log(req.body);
  let id = req.params.id
  let album = {
    title: req.body.title,
    image: req.body['image'],
    dedicated_to: req.body.dedicated_to,
    user_id: req.body.user_id
  }
  albumsModel.updateSingleAlbum(id, album)
  .then(album => {
    res.json(album)
  }).catch(err => next (err))
}

function deleteAlbum (req, res, next) {
  let id = req.params.id
  albumsModel.deleteSingleAlbum(id)
  .then(album => {
    res.json(album)
  }).catch(err => next (err))
}



module.exports = {getAllAlbums, getOneAlbum, createAlbum, updateAlbum, deleteAlbum}

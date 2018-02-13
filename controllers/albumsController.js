let albumsModel = require('../models/albumsModel.js')

function getAllAlbums (req, res, next) {
  albumsModel.allAlbums()
  .then(albums => {
    res.json(albums)
  }).catch(err => next(err))
}


module.exports = {getAllAlbums}

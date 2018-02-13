
let express = require('express')
let router = express.Router()
let albumsController = require('../controllers/albumscontroller.js')

router.get('/', albumsController.getAllAlbums)

module.exports = router

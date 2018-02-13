
let express = require('express')
let router = express.Router()
let albumsController = require('../controllers/albumscontroller.js')

router.get('/', albumsController.getAllAlbums)
router.get('/:id', albumsController.getOneAlbum)
router.post('/', albumsController.createAlbum)
router.put('/:id', albumsController.updateAlbum)
router.delete('/:id', albumsController.deleteAlbum)


module.exports = router

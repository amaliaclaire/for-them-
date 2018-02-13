let express = require('express')
let router = express.Router()
let contentsController = require('../controllers/contentsController.js')

router.get('/', contentsController.getAllContents)
router.get('/:id', contentsController.getContent)
router.post('/', contentsController.createContent)
router.put('/:id', contentsController.updateContent)
router.delete('/:id', contentsController.deleteContent)


module.exports = router

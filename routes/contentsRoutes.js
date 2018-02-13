let express = require('express')
let router = express.Router()
let contentsController = require('../controllers/contentsController.js')

router.get('/', contentsController.getAllContents)
router.get('/:id', contentsController.getContent)
router.post('/', contentsController.createContent)


module.exports = router

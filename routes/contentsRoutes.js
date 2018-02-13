let express = require('express')
let router = express.Router()
let contentsController = require('../controllers/contentsController.js')

router.get('/', contentsController.getAllContents)


module.exports = router

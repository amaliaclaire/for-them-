
let express = require('express')
let router = express.Router()
let forThemController = require('../controllers/for-them-controller.js')

router.get('/', forThemController.allUsersController)
router.get('/:id', forThemController.getOneController)

module.exports = router

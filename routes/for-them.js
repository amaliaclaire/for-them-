
let express = require('express')
let router = express.Router()
let forThemController = require('../controllers/for-them-controller.js')

// users
router.get('/', forThemController.allUsersController)
router.get('/:id', forThemController.getOneController)
router.post('/', forThemController.createUserController)
router.delete('/:id', forThemController.deleteUserController)

module.exports = router

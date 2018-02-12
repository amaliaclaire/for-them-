
let express = require('express')
let router = express.Router()
let forThemController = require('../controllers/for-them-controller.js')
console.log('hi', forThemController)

router.get('/', forThemController.allUsersController)

module.exports = router

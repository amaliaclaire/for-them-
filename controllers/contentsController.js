let contentsModel = require('../models/contentsModel.js')

function getAllContents (req, res, next) {
  contentsModel.getAllContents()
  .then(contents => {
    res.json(contents)
  }).catch(err => next(err))
}
module.exports = {getAllContents}

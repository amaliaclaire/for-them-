let contentsModel = require('../models/contentsModel.js')

function getAllContents (req, res, next) {
  contentsModel.getAllContents()
  .then(contents => {
    res.json(contents)
  }).catch(err => next(err))
}

function getContent (req, res, next) {
  let id = req.params.id
  contentsModel.getSingleContent(id)
  .then(contents => {
    res.json(contents)
  }).catch(err => next(err))
}

function createContent (req, res, next) {
  let { title, content_type, image, category} = req.body
  contentsModel.createSingleContent(title, content_type, image, category)
  .then(content => {
    res.json(content)
  }).catch(err => next(err))
}

function updateContent(req, res, next) {
  let id = req.params.id
  let content = {
    title: req.body.title,
    content_type: req.body.content_type,
    image: req.body.image,
    category: req.body.category
  }
  contentsModel.updateSingleContent(id, content)
  .then(content => {
    res.json(content)
  }).catch(err => next(err))
}
module.exports = {getAllContents, getContent, createContent, updateContent}

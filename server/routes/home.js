const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.post('/getPost', function(req, res, next) {
  db.getPostList(req, res, next)
})

router.post('/user', function(req, res, next) {
  db.getUser(req, res, next)
})

router.post('/getPageCount', function(req, res, next) {
  db.getPageCount(req, res, next)
})

module.exports = router

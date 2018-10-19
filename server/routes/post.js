const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.post('/getPostDetail', function(req, res, next) {
  db.getPostDetail(req, res, next)
})

router.post('/addReadTime', function(req, res, next) {
  db.addReadTime(req, res, next)
})

router.post('/getCommentDetail', function(req, res, next) {
  db.getCommentDetail(req, res, next)
})

module.exports = router

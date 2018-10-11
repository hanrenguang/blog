const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.post('/createComment', function(req, res, next) {
  db.createComment(req, res, next)
})

router.post('/getCommentDetail', function(req, res, next) {
  db.getCommentDetail(req, res, next)
})

module.exports = router

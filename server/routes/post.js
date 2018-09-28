const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.post('/getPostDetail', function(req, res, next) {
  console.log('post api')
  db.getPostDetail(req, res, next)
})

module.exports = router

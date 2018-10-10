const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.post('/putPostInfo', function(req, res, next) {
  db.createPost(req, res, next)
})

module.exports = router

const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

let klasses = []

router.post('/getClass', function(req, res, next) {
  db.getAllCategory(req, res, next)
})

router.post('/getPostByCid', function(req, res, next) {
  db.getPostByCid(req, res, next)
})

module.exports = router

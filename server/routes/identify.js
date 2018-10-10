const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.post('/user', function(req, res, next) {
  db.getUser(req, res, next)
})

router.post('/isLogin', function(req, res, next) {
  if (req.session.userName) {
    res.send({
      status: 1,
      username: req.session.userName
    })
  } else {
    res.send({
      status: 0
    })
  }
})

module.exports = router

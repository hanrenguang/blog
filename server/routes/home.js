const express = require('express')
const router = express.Router()
const db = require('../db/dbOperating.js')

router.get('/', function(req, res, next) {
  console.log('home api')
  res.send({
    posts: [
      {
        id: 0,
        brief: 'post0 brief',
        title: 'post0'
      }
    ],
    total_page: 1
  })
})

router.post('/user', function(req, res, next) {
  console.log('user api')
  db.getUser(req, res, next)
})

module.exports = router

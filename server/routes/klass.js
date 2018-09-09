const express = require('express')
const router = express.Router()

let klasses = []

router.post('/klass', function(req, res, next) {
  console.log('klass api')
  res.send(klasses)
})

module.exports = router

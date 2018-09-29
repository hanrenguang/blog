const express = require('express')
const router = express.Router()

let klasses = []

router.post('/klass', function(req, res, next) {
  res.send(klasses)
})

module.exports = router

const express = require('express')
const router = express.Router()

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

module.exports = router

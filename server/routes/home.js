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
      },
      {
        id: 1,
        brief: 'post1 brief',
        title: 'post1'
      },
      {
        id: 2,
        brief: 'post2 brief',
        title: 'post2'
      },
      {
        id: 3,
        brief: 'post3 brief',
        title: 'post3'
      },
      {
        id: 4,
        brief: 'post4 brief',
        title: 'post4'
      }
    ],
    total_page: 1
  })
})

module.exports = router

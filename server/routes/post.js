const express = require('express')
const router = express.Router()

let posts = [
  {
    content: 'post0',
    comments: [
      {
        comment: '评论1',
        people: 'hhh',
        date: '2018.09.06'
      },
      {
        comment: '评论2',
        people: 'hhh',
        date: '2018.09.06'
      },
      {
        comment: '评论3',
        people: 'hhh',
        date: '2018.09.06'
      }
    ]
  }
]

router.post('/post', function(req, res, next) {
  console.log('post api')
  res.send(posts[req.body.post_id])
})

module.exports = router

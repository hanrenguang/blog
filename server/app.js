const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()

const homeRouter = require('./routes/home.js')
const postRouter = require('./routes/post.js')
const klassRouter = require('./routes/klass.js')
const createPostRouter = require('./routes/createPost.js')
const identifyRouter = require('./routes/identify.js')

app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
  credentials: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
  secret: 'hrg blog',
  resave: false,
  saveUninitialized: true
}))

app.use(homeRouter)
app.use(postRouter)
app.use(klassRouter)
app.use(createPostRouter)
app.use(identifyRouter)

let server = app.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port

  console.log('Blog server listening at http://%s:%s', host, port)
})

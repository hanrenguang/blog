const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const homeRouter = require('./routes/home.js')
const postRouter = require('./routes/post.js')
const klassRouter = require('./routes/klass.js')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(homeRouter)
app.use(postRouter)
app.use(klassRouter)

let server = app.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

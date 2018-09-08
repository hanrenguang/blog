const express = require('express')
const cors = require('cors')
const app = express()

const homeRouter = require('./route/home.js')

app.use(cors())

app.use('/', homeRouter)

let server = app.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
const mysql = require('mysql')
const conf = require('./conf.js')

let pool = mysql.createPool(conf)

module.exports = {
  // get user
  getUser (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT password FROM user WHERE username=?', [req.body.username], (err, results, field) => {
        if (err) throw err

        if (!results[0]) {
          res.send({
            status: 0,
            msg: '用户不存在！'
          })
        } else if (results[0].password === req.body.password) {
          // req.session.userName = req.body.username
          res.send({
            status: 1
          })
        } else {
          res.send({
            status: 0,
            msg: '密码错误！'
          })
        }

        connection.release()
      })
    })
  },
  // get postlist
  getPostList (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT * FROM posts limit ?,?', [req.body.num * (req.body.page - 1), req.body.num], (err, results, field) => {
        if (err) throw err

        res.send(results)

        connection.release()
      })
    })
  },
  // get page count
  getPageCount (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT count(*) FROM posts', [], (err, results, field) => {
        if (err) throw err

        let pageCount = Math.ceil(results[0]['count(*)'] / req.body.num) === 0 ? 1 : Math.ceil(results[0]['count(*)'] / req.body.num)

        res.send({
          page_count: pageCount
        })

        connection.release()
      })
    })
  },
  // get post detail
  getPostDetail (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT * FROM posts WHERE id=?', [req.body.postId], (err, results, field) => {
        if (err) throw err

        res.send(results[0])

        connection.release()
      })
    })
  },
  // get comment detail
  getCommentDetail (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT * FROM comments WHERE pid=?', [req.body.postId], (err, results, field) => {
        if (err) throw err

        res.send(results)

        connection.release()
      })
    })
  }
}

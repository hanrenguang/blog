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
  getPostList (num, page) {

  }
}

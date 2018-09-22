const mysql = require('mysql')
const conf = require('./conf.js')

let pool = mysql.createPool(conf)

module.exports = {
  // get user
  getUser (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT username,password FROM user', (err, results, field) => {
        console.log(results)
        connection.release()
        res.send('hhh')
        if (err) throw err
      })
    })
  }
}

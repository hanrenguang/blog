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
          req.session.userName = req.body.username
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
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT * FROM posts WHERE id=?', [req.body.postId], (err, results, field) => {
          if (err) throw err

          connection.release()
          resolve(results[0])
        })
      })
    }).then(data => {
      pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT username FROM user WHERE id=?', [data.uid], (err, results, field) => {
          if (err) throw err

          data.user = results[0].username

          res.send(data)
          connection.release()
        })
      })
    }).catch(err => {
      console.log(err)
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
  },
  // add readTime
  addReadTime (req, res, next) {
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('SELECT readtime FROM posts WHERE id=?', [req.body.postId], (err, results, field) => {
          if (err) throw err

          connection.release()
          resolve(results[0])
        })
      })
    }).then(data => {
      pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query(`UPDATE posts SET readtime=${++data.readtime} WHERE id=?`, [req.body.postId], (err, results, field) => {
          if (err) throw err

          res.send({
            status: 1,
            readtime: data.readtime
          })
          connection.release()
        })
      })
    }).catch(err => {
      console.log(err)
    })
  },
  // create comment
  createComment (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('INSERT INTO comments (name, content, pid) VALUES(?, ?, ?)', [
        req.body.name,
        req.body.content,
        req.body.pid
      ], (err, results, field) => {
        if (err) throw err

        if (results.insertId) {
          res.send({
            status: 1,
            id: results.insertId
          })
        } else {
          res.send({
            status: 0
          })
        }

        connection.release()
      })
    })
  },
  // create post
  createPost (req, res, next) {
    let categoryId = void 0
    let userId = void 0

    Promise.all([
      new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          if (err) reject(err)

          connection.query('SELECT * FROM category WHERE name=?', [req.body.classification], (err, results) => {
            if (results.length === 0) {
              connection.query('INSERT INTO category (name) VALUES(?)', [req.body.classification], (err, results, field) => {
                if (err) reject(err)

                categoryId = results.insertId
                resolve()
              })
            } else {
              categoryId = results[0].id
              resolve()
            }
          })

          connection.release()
        })
      }),
      new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
          if (err) reject(err)

          connection.query('SELECT id FROM user WHERE username=?', [req.session.userName], (err, results) => {
            if (err) reject(err)
            
            userId = results[0].id
            resolve()
          })

          connection.release()
        })
      })
    ])
    .then(val => {
      pool.getConnection((err, connection) => {
        if (err) throw err

        connection.query('INSERT INTO posts (title, brief, content, readtime, category, uid) VALUES(?, ?, ?, ?, ?, ?)', [
            req.body.title,
            req.body.brief,
            req.body.content,
            0,
            categoryId,
            userId
          ], (err, results, field) => {
          if (err) throw err

          if (results.insertId) {
            res.send({
              status: 1,
              id: results.insertId
            })
          } else {
            res.send({
              status: 0
            })
          }

          connection.release()
        })
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  // get all class
  getAllCategory (req, res, next) {
    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT * FROM category', [], (err, results, field) => {
        if (err) throw err

        res.send(results)

        connection.release()
      })
    })
  },
  // get post by cid
  getPostByCid (req, res, next) {
    const cid = parseInt(req.body.cid)

    pool.getConnection((err, connection) => {
      if (err) throw err

      connection.query('SELECT * FROM posts WHERE category=?', [cid], (err, results, field) => {
        if (err) throw err

        res.send(results)

        connection.release()
      })
    })
  }
}

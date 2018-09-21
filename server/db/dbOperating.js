const mysql = require('mysql')
const conf = require('./conf.js')

let pool = mysql.createPool(conf)

module.exports = {
  
}

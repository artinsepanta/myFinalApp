const mysql = require('mysql');

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password: '2535',
        database:'servicereport'
      })

      return this.pool
    }

    return this.pool
  }
};
//console.log(connection)

//???***********************
const instance = new Connection()

module.exports = instance;
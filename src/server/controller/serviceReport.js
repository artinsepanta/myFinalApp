const mysql = require('mysql');
const pool = require('../sql/connection');
console.log('pool', pool)
// const { handleSQLError } = require('../sql/error');

exports.getAllSerReport = (req, res) => {
  console.log('res: ', res);
  pool.query("SELECT * FROM ser_report", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

exports.getSerReportById = (req, res) => {
  let sql = "SELECT * FROM ser_report WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

exports.createSerReport = (req, res) => {
  const { nom ,types, descriptions, process } = req.body
  let sql = "INSERT INTO ser_report (nom ,types, descriptions, process ) VALUES (?, ?, ?, ?)"
  sql = mysql.format(sql, [ nom ,types, descriptions, process  ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

exports.updateSerReportById = (req, res) => {
  const { nom ,types, descriptions, process } = req.body
  let sql = "UPDATE ser_report SET nom = ?, types= ? ,descriptions = ?, process = ? WHERE id = ?"
  sql = mysql.format(sql, [ nom ,types, descriptions, process, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

exports.deleteSerReportById = (req, res) => {
  let sql = "DELETE FROM ser_report WHERE ID = ?"
  sql = mysql.format(sql, [ req.params.Id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} ser_report(s)` });
  })
}
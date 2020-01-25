const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllSerReport = (req, res) => {
  console.log('res: ', res);
  pool.query("SELECT * FROM serReport", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getSerReportById = (req, res) => {
  let sql = "SELECT * FROM serReport WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createSerReport = (req, res) => {
  const { nom ,types, descriptions, process } = req.body
  let sql = "INSERT INTO serReport (nom ,types, descriptions, process ) VALUES (?, ?, ?, ?)"
  sql = mysql.format(sql, [ nom ,types, descriptions, process  ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateSerReportById = (req, res) => {
  const { nom ,types, descriptions, process } = req.body
  let sql = "UPDATE serReport SET nom = ?, types= ? ,descriptions = ?, process = ? WHERE id = ?"
  sql = mysql.format(sql, [ nom ,types, descriptions, process, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteSerReportById = (req, res) => {
  let sql = "DELETE FROM serReport WHERE ID = ?"
  sql = mysql.format(sql, [ req.params.Id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} serReport(s)` });
  })
}

module.exports = {
  getAllSerReport,
  getSerReportById,
  createSerReport,
  updateSerReportById,
  deleteSerReportById
}
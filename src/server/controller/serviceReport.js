const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

const getAllSerreport = (req, res) => {
  console.log('res: ', res);
  pool.query("SELECT * FROM serreport", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
};

const getSerreportById = (req, res) => {
  let sql = "SELECT * FROM serreport WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createSerreport = (req, res) => {
  const { nom ,types, descriptions, process } = req.body
  let sql = "INSERT INTO serreport (nom ,types, descriptions, process ) VALUES (?, ?, ?, ?)"
  sql = mysql.format(sql, [ nom ,types, descriptions, process  ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

const updateSerreportById = (req, res) => {
  const { nom ,types, descriptions, process } = req.body
  let sql = "UPDATE serreport SET nom = ?, types= ? ,descriptions = ?, process = ? WHERE id = ?"
  sql = mysql.format(sql, [ nom ,types, descriptions, process, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteSerreportById = (req, res) => {
  let sql = "DELETE FROM serreport WHERE ID = ?"
  sql = mysql.format(sql, [ req.params.Id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} serreport(s)` });
  })
}

module.exports = {
  getAllSerreport,
  getSerreportById,
  createSerreport,
  updateSerreportById,
  deleteSerreportById
}
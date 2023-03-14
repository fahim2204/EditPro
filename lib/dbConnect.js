const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'fahimfaisal.net',
  user: 'fahimfai_fahim',
  password: 'KoolMan@#98',
  database: 'fahimfai_editpro',
  connectionLimit: 10, // maximum number of connections in the pool
  multipleStatements: true // enable multipleStatements option
});

module.exports = pool;

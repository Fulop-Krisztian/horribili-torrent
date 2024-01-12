// db.js

var mysql = require('mysql');

// Create a connection pool to handle multiple connections
const pool = mysql.createPool({
  host: '192.168.0.220',
  user: 'root',
  password: 'root',
  database: 'horribili-torrent',
});

// Export the pool for reuse in other modules
module.exports = pool;
// main.js

var dbPool = require('./JS/db.cjs'); // Update the path accordingly

// Use the database connection pool
dbPool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting MySQL connection from pool: ' + err.stack);
    return;
  }

  // Perform database operations using the connection

  // Example query
  connection.query('SELECT * FROM posts', (queryErr, results, fields) => {
    connection.release(); // Release the connection back to the pool when done

    if (queryErr) {
      console.error('Error executing MySQL query: ' + queryErr.stack);
      return;
    }

    // Process the results here
    console.log(results);
  });
});

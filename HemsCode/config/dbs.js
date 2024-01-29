const mongoose = require('mongoose')
const mysql = require('mysql')

const mongoDb = mongoose.connect(`mongodb+srv://hemanathan:IE3z3RgUx3JJ0W3V@cluster0.rfgyorc.mongodb.net/`)
try {
    console.log(`db-Connected!`);
} catch (error) {
    console.log(error);
    process.exit()
}

const mySQL = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
})

const dbs = ''

module.exports = dbs

/**
 * var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
 */
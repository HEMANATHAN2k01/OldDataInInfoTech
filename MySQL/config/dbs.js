const mysql = require('mysql')

const dbs = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "dammy"
});


dbs.connect((err) => {
    if (err) {
        console.log(err);
        process.exit()
    } else {
        console.log(`DBs Connected!`);
    }
});


module.exports = dbs
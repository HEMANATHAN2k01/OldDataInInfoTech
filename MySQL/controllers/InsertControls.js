// const { InsertData } = require('../query/insertquery/InsertQuery')
const dbs = require('../config/dbs')
const { v4: uuidv4 } = require('uuid');

exports.InsertUserData = (req, res) => {
    console.log("Req.body", req)
    const dbQuery = `insert into dammy.userdata (iddata,iduser,dept,blood,address) value ('${uuidv4()}','3545242572','fgtusradei','kjrtfge','gkhgldsfk')`
    dbs.query(dbQuery, (QueryErr, QueryData) => {
        if (QueryErr) {
            res.send(QueryErr)
        } else {
            res.send(QueryData)
            console.log(QueryData);
        }
    })
}
const { GetAllData } = require('../query/getquery/GetQuery')
const dbs = require('../config/dbs')

exports.FullData = (req, res) => {
    dbs.query(GetAllData(), (QueryErr, QueryData) => {
        if (QueryErr) {
            res.send(QueryErr)

        } else {
            if (QueryData.length !== 0) {
                res.send(QueryData)
            } else {
                
                res.send(`Something wrong`)
            }
        }
    })
}

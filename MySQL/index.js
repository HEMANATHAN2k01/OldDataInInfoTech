const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {queryParser} = require('express-query-parser')

const app = express()
const DBs = require('./config/dbs')
const Router = require('./routers/GetRouters')

app.use(Router)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(
    queryParser({
      parseNull: true,
      parseUndefined: true,
      parseBoolean: true,
      parseNumber: true,
    })
  );
DBs;



app.listen(4040, () => {
    console.log(`Server is running on port: http://localhost:4040`);
})

// localhost:4040
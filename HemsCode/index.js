const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const Router = require('./routers/GetRouter')
const Dbs = require('./config/dbs')

app.use(Router)
Dbs

app.listen(3000, () => {
    console.log(`Server is running on port : http://localhost:3000`);
})
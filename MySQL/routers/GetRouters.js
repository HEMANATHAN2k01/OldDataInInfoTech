const express = require('express')
const Router = express.Router()
const AllData = require('../controllers/GetControls')
const Insert = require('../controllers/InsertControls')

Router.get('/', AllData.FullData)
Router.post('/add',Insert.InsertUserData)


module.exports = Router
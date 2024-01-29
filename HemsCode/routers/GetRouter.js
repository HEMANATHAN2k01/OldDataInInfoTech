const express = require('express')
const Router = express.Router()
const controls = require('../controllers/GetControl')

Router.get('/', controls.default)

module.exports = Router
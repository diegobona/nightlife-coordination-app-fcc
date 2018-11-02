const express = require('express')
const path = require('path')
require('dotenv').config()

const middlewaresConfig = require('./config/middlewares')
const errorHandler = require('./config/errorHandling')

const app = express()
middlewaresConfig(app)

app.use(express.static(path.join(__dirname, 'dist')))

errorHandler(app)

module.exports = app
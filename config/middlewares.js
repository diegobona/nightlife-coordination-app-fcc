// Import dependencies
const express = require('express');
// const compression = require('compression');
// const helmet = require('helmet');
// const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const MongoConnection = MongoStore(session)

// Import modules
const routes = require('../routes')
const db = require('./database')
const passportConfig = require('../config/passport')

module.exports = (app) => {
    // app.use(compression());
    // app.use(helmet());
      
    app.use(logger('dev'));

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      store: new MongoConnection({mongooseConnection: db})
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    
    passportConfig(passport)
    
    // Middleware for handling routes and errors
    routes(app);
    
  };
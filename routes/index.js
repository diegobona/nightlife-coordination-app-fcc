const usersRouter = require('./users');
const partyRouter = require('./party');

module.exports = (app) => {
  app.use('/users', usersRouter)
  app.use('/party', partyRouter)
};
const usersRouter = require('./users');
const barsRouter = require('./bars');

module.exports = (app) => {
  app.use('/users', usersRouter)
  app.use('/bars', barsRouter)
};
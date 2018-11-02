const userRouter = require('./user');
const barRouter = require('./bar');

module.exports = (app) => {
  app.use('/user', userRouter)
  app.use('/bar', barRouter)
};
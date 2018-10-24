const createError = require('http-errors');

module.exports = (app) => {
  app.use(function(req, res, next) {
    next(createError(404));
  });
    
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err)
  });
      
  // app.use((err, req, res, next) => {
  //   res.status(err.status || 500)
    
  //   if (err.name == 'MongoError') {
  //   return res.json({
  //     error: {
  //       message: err.message,
  //       code: err.code,
  //       name: err.name
  //     }
  //   })
  //   }
  //   res.json({
  //     error: {
  //       message: err.message,
  //       name: err.name
  //     },
  //   });
  // });
}
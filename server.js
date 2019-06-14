process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var debug = require('debug')('pukaarapp:server');
var logger = require('morgan');
var http = require('http');
var bluebird = require('bluebird')
var mongoose = require('mongoose')
mongoose.Promise = bluebird

// var passport = require('passport');
var cors = require('cors');

// var indexRouter = require('./routes/index');
// var apiRouter = require('./routes/api.routes')
var app = express();

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3009');
app.set('port', port);
// const appConstants = require('./api/config/app')[process.env.NODE_ENV];

app.use(cors()); 
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(passport.initialize());
// app.use('/', indexRouter);
// app.use('/api/v1', apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

var uristring = process.env.MONGODB_URI || 'mongodb://localhost:27017/pets';

/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


mongoose.connect(uristring)
.then(()=> { 
  console.log(`Succesfully Connected to the Mongodb Database botfully`)})
.catch((e)=> { 
  console.log(`Error Connecting to the Mongodb Database: ${e}`)})

module.exports = app;         
  

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }


  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Listening on port: ', port);
  }
  
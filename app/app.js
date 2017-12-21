var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')


//db connection
let CONNECTION_URI = require('./connectionsstring')

mongoose.connect(CONNECTION_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

mongoose.connection.once('open', () => {
  console.log('connection has been made')
})

mongoose.connection.on('error', (err) => {
  console.log(`a db error occured: ${err}`)
})

//register models
const User = require('./models/user')
const Room = require('./models/room')
const Message = require('./models/message')

var app = express();

//allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));
require('./auth/passport')()
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'supersecret'
}))
app.use(passport.initialize());
app.use(passport.session())




//Import and register all routers
var index = require('./routes/index');
var users = require('./routes/users');
const rooms = require('./routes/rooms')

app.use('/', index)
app.use('/api/users', users);
app.use('/api/rooms', rooms);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.redirect('/')
  next(err);
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


module.exports = app;

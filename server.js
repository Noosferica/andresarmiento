'use strict'

const express         = require('express');
const path            = require('path');
const bodyParser      = require('body-parser');
const morgan    		  = require('morgan');
const cookieParser 	  = require('cookie-parser');
const session   		  = require('express-session');
const methodOverride 	= require('method-override');
const favicon 		    = require('serve-favicon');
const mongoose        = require('mongoose');
const flash           = require('connect-flash');
const config          = require('./config/config');
const MongoStore      = require('connect-mongo')(session);
const chalk           = require('chalk');
const entorno         = require('./config/').config()

// mongoose.Promise = global.Promise;
// mongoose.connect(entorno.MONGODB_URI);
// mongoose.connection.on('error', () => {
//   console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
//   process.exit();
// });

const app = express();

app.set('port', entorno.PORT);

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.json() );   
app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.use(methodOverride());                  
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'Andres',
  // store: new MongoStore({
  //   url: entorno.MONGODB_URI,
  //   autoReconnect: true
  // })
}));


app.use(express.static(path.join(__dirname, 'public')));

const api = require('./routes');

app.use('/', api)

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.blue('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});
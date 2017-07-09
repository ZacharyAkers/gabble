const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const routes = require('./routes/main');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.use('/public', express.static('public'));
app.set('layout', 'layout');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(validator());

// app.use(morgan('dev'));

app.use(session({
  secret: 'asfbb ajkbf',
  resave: false,
  saveUninitialized: false
}));

app.use(routes);

app.listen(3000, function(){
  console.log("App running on localhost:3000")
});
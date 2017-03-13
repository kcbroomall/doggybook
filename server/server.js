console.log('in server.js');
// this should actually be server-config.js
// the server executes from the require call in index.js from the root directory

var db = require('../app/config');

var express = require('express');
// var bodyParser = require('body-parser');

var app = express();

require('./middleware.js')(app, express);
require('./routes.js')(app, express);

// middleware
// app.use(express.static('client'));
// app.use(bodyParser.json());

// app.post('/api/users/signup', handle.signup);
// app.post('/api/users/signin', handle.signin);
// app.get('/api/dogs', handle.dogSearch);
// app.get('/api/walkers', handle.walkerSearch);

module.exports = app;

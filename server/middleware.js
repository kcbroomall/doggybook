// I don't think we need morgan....yet...
// var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  // app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));
};

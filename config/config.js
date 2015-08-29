var bodyParser = require('body-parser'),
    morgan = require('morgan');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  //app.use(methodOverride());
  app.use(morgan('dev'));
  app.set('views', [ '../server/views' ]);
  app.set('view engine', 'hjs');
};

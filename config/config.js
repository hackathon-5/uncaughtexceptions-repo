var bodyParser = require('body-parser'),
    morgan = require('morgan'),
    express = require('express'),
    path = require('path');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.set('views', [ './server/views' ]);
  app.set('view engine', 'ejs');
  app.use(express.static(path.join(__dirname, '../bower_components')));
  app.use(express.static(path.join(__dirname, '../public')));
};

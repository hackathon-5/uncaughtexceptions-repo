var express = require('express'),
    app = express(),
    port = 8000,
    Promise = require('bluebird'),
    CelebModel = require('./server/models/celebrity.js'),
    config = require('config'),
    mongoose = require('mongoose');

    Promise.promisifyAll(CelebModel);
    Promise.promisifyAll(CelebModel.prototype);

mongoose.connect(config.get('db_connection_string'));

global.req = require('app-root-path').require;

//configure express options
require('./config/config.js')(app);

//bootstrap routes
require('./server/routes')(app);

app.get('/celebs', function(req, res, next) {
  CelebModel.findAsync()
    .then(function(results) {
      console.log(results);
      res.json(results);
    })
    .catch(function(error) {
      console.log(error);
    })
});

app.listen(port);

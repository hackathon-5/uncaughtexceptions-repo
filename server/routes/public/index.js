var express = require('express'),
    router = express.Router(),
    CelebModel = require('../../models/celebrity.js'),
    Promise = require('bluebird');

    Promise.promisifyAll(CelebModel);
    Promise.promisifyAll(CelebModel.prototype);

module.exports = function(app) {

  router.get('/', function(req, res, next) {
    res.render('index');
  });

  app.use(router);
};

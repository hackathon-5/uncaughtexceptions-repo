var express = require('express'),
    router = express.Router();

module.exports = function(app) {

  router.get('/', function(req, res, next) {
    res.render('index');
  });

  app.use(router);
};

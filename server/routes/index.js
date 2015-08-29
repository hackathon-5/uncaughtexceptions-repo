var express = require('express'),
  router = express.Router();

module.exports = function (app) {
    //require('./api')(app);
    require('./public')(app);
};

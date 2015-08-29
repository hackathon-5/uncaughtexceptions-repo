var mongoose = require('mongoose'),
    Promise = require('Bluebird'),
    CelebrityModel = require('../models/celebrity.js');

Promise.promisifyAll(CelebrityModel);
Promise.promisifyAll(CelebrityModel.prototype);

module.exports.fetchCelebrities = function() {
  return CelebrityModel.findAsync();
};

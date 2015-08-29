var mongoose = require('mongoose'),
    Promise = require('Bluebird'),
    BingModel = require('../models/bing-post.js');

Promise.promisifyAll(BingModel);
Promise.promisifyAll(BingModel.prototype);

module.exports.insertBingItem = function(item_to_insert) {
  var pending_bing_model = new BingModel({ item_to_insert });

  return BingModel.saveAsync(pending_bing_model);
};

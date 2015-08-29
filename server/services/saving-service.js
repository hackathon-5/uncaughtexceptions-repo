var Promise = require('bluebird'),
    mongoose = require('mongoose'),
    BingModel = require('../models/bing-post.js'),
    InstagramModel = require('../models/instagram-post.js'),
    TwitterModel = require('../models/twitter.js'),
    SoundcloudModel = require('../models/soundcloud.js');

    Promise.promisifyAll(BingModel);
    Promise.promisifyAll(BingModel.prototype);

    Promise.promisifyAll(InstagramModel);
    Promise.promisifyAll(InstagramModel.prototype);

    Promise.promisifyAll(TwitterModel);
    Promise.promisifyAll(TwitterModel.prototype);

    Promise.promisifyAll(SoundcloudModel);
    Promise.promisifyAll(SoundcloudModel.prototype);

module.exports.saveWhoWeCan = function(bing_collection, instagram_collection, twitter_collection, soundcloud_collection) {
  var promise_collection = [];

  var bing_save_promises = Promise.map(bing_collection, function(model) {
    return BingModel.findOneAndUpdateAsync( { bing_id: model.bing_id }, model, { upsert: true });
    //return BingModel.saveAsync(model);
  });

  var insta_save_promises = Promise.map(instagram_collection, function(model) {
    return InstagramModel.findOneAndUpdateAsync( { post_id: model.post_id }, model, { upsert: true });
    //return InstagramModel.saveAsync(model);
  });

  var twitter_save_promises = Promise.map(twitter_collection, function(model) {
    return TwitterModel.findOneAndUpdateAsync( { tweet_id: model.tweet_id }, model, { upsert: true });
    //return TwitterModel.saveAsync(model);
  });

  var soundcloud_save_promises = Promise.map(soundcloud_collection, function(model) {
    return SoundcloudModel.findOneAndUpdateAsync( { post_id: model.post_id }, model, { upsert: true });
    //return SoundcloudModel.saveAsync(model);
  });

  promise_collection.push([
    bing_save_promises,
    insta_save_promises,
    twitter_save_promises,
    soundcloud_save_promises
  ]);

  return promise_collection;
};

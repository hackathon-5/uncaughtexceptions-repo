var Promise = require('bluebird'),
    Config = require('config'),
    Twitter = require('twitter');

var client = new Twitter({
  consumer_key: Config.get('twitter.api_key'),
  consumer_secret: Config.get('twitter.api_secret'),
  access_token_key: Config.get('twitter.access_token'),
  access_token_secret: Config.get('twitter.access_secret')
});

Promise.promisifyAll(client);

module.exports.getRecentTweets = function(twitter_name) {
  return client.getAsync('favorites/list', { screen_name: twitter_name, include_rts: true });
};

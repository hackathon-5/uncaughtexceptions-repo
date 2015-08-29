var BingAggregator = require('./bing-news-service.js'),
    InstagramAggregator = require('./instagram-service.js'),
    TwitterAggregator = require('./twitter-service.js');

module.exports.acquireTargets = function(target) {
    return new Array([
      BingAggregator.searchBingNews(target.bing_news),
      InstagramAggregator.getRecentInstagramPosts(target.instagram),
      TwitterAggregator.getRecentTweets(target.twitter_handle)
    ]);
};

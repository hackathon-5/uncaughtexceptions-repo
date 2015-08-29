var BingAggregator = require('./bing-news-service.js'),
    InstagramAggregator = require('./instagram-service.js'),
    TwitterAggregator = require('./twitter-service.js'),
    SoundCloudAggregator = require('./soundcloud-service.js'),
    Promise = require('bluebird');

module.exports.acquireTargets = function(target) {
    var reaper_targets = [];

     var bing_promise = BingAggregator.searchBingNews(target.bing_news);
     var instagram_promise = InstagramAggregator.getRecentInstagramPosts(target.instagram);
     var twitter_promise = TwitterAggregator.getRecentTweets(target.twitter_handle);
     var soundcloud_promise = SoundCloudAggregator.getSoundcloudTracks(target.soundcloud);
     var target_id = Promise.resolve(target.id);

    reaper_targets.push(bing_promise);
    reaper_targets.push(instagram_promise);
    reaper_targets.push(twitter_promise);
    reaper_targets.push(soundcloud_promise);
    reaper_targets.push(target_id);

    return reaper_targets;
};

var _ = require('lodash');

module.exports.cleanResults = function(bing_array, instagram_array, twitter_array, soundcloud_array, parent_id) {
  var model_collection = [];

  var bing_models = _.map(bing_array, function(bing_result) {
    return {
      title: bing_result.Title,
      description: bing_result.Description,
      bing_id: bing_result.ID,
      source: bing_result.Source,
      url: bing_result.Url,
      parent_id: parent_id
    };
  });

  var instagram_models = _.map(instagram_array, function(instagram_result) {
      return {
        created_time: instagram_result.created_time,
        post_id: instagram_result.id,
        type: instagram_result.type,
        url: instagram_result.link,
        parent_id: parent_id
      };
  });

  var twitter_models = _.map(twitter_array, function(twitter_result) {
    return {
      tweet_id: twitter_result.id,
      id_str: twitter_result.id_str,
      parent_id: parent_id,
      created_time: twitter_result.created_at
    };
  });

  var soundcloud_models = _.map(soundcloud_array, function(soundcloud_result) {
    return {
      created_time: soundcloud_result.created_at,
      post_id: soundcloud_result.id,
      track_titlie: soundcloud_result.title,
      url: soundcloud_result.uri,
      parent_id: parent_id,
      permalink: soundcloud_result.permalink_url
    };
  });

  return new Array([
    bing_models,
    instagram_models,
    twitter_models,
    soundcloud_models
  ]);
};

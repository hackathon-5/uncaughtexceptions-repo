var _ = require('lodash');

module.exports.cleanResults = function(bing_array, instagram_array) {
  var model collection = [];

  var bing_models = _.map(bing_array, function(bing_result) {
    return {
      title: bing_result.Title,
      description: bing_result.Description,
      bing_id: bing_result.ID,
      source: bing_result.Source,
      url: bing_result.Url
    };
  });

  var instagram_models = _.map(instagram_array, function(instagram_result) {
      return {
        created_time: instagram_result.created_time,
        post_id: instagram_result.id,
        type: instagram_result.type,
        url: instagram_result.link
      };
  });

  return new Array([
    bing_models,
    instagram_models
  ]);
};

var Promise = require('bluebird'),
    Config = require('config'),
    ig = require('instagram-node').instagram();

Promise.promisifyAll(ig);

ig.use({
  client_id: Config.get('instagram.client_id'),
  client_secret: Config.get('instagram.client_secret')
});

module.exports.getRecentInstagramPosts = function(instagram_name) {
  return ig.user_media_recentAsync(instagram_name);
};

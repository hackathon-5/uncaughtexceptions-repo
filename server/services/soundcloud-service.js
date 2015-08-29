var Promise = require('bluebird'),
    Config = require('config'),
    SC = require('node-soundcloud');

Promise.promisifyAll(SC);

SC.init({
  id: Config.get('soundcloud.client_id'),
  secret: Config.get('soundcloud.client_id')
});

module.exports.getSoundcloudTracks = function(soundclound_id) {
  return SC.getAsync('/users/' + soundclound_id + '/tracks');
};

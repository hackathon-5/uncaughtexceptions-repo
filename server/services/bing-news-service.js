var Promise = require('bluebird'),
    config = require('config'),
    Bing = require('node-bing-api')({ accKey: config.get('bing_key') });

Promise.promisifyAll(Bing);

module.exports.searchBingNews = function(search_term) {

};

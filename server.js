var express = require('express'),
    app = express(),
    port = 8000,
    Promise = require('bluebird'),
    CelebModel = require('./server/models/celebrity.js'),
    TwitterModel = require('./server/models/twitter.js'),
    InstagramModel = require('./server/models/instagram-post.js'),
    BingModel = require('./server/models/bing-post.js'),
    SoundcloudModel = require('./server/models/soundcloud.js'),
    config = require('config'),
    mongoose = require('mongoose');

    Promise.promisifyAll(CelebModel);
    Promise.promisifyAll(CelebModel.prototype);

    Promise.promisifyAll(TwitterModel);
    Promise.promisifyAll(TwitterModel.prototype);

    Promise.promisifyAll(InstagramModel);
    Promise.promisifyAll(InstagramModel.prototype);

    Promise.promisifyAll(BingModel);
    Promise.promisifyAll(BingModel.prototype);

    Promise.promisifyAll(SoundcloudModel);
    Promise.promisifyAll(SoundcloudModel.prototype);

mongoose.connect(config.get('db_connection_string'));

global.req = require('app-root-path').require;

//configure express options
require('./config/config.js')(app);

//bootstrap routes
require('./server/routes')(app);

app.get('/celebs', function(req, res, next) {
  CelebModel.findAsync()
    .then(function(results) {
      console.log(results);
      res.json(results);
    })
    .catch(function(error) {
      console.log(error);
    })
});

app.get('/celebs/:id/:type', function(req, res, next) {
  var celeb_id = req.params.id;
  var media_type = req.params.type;

  if(media_type == "twitter") {
    TwitterModel.findAsync({ parent_id: celeb_id})
      .then(function(results) {
        res.json(results);
      });
  }

  if(media_type == "instagram") {
    InstagramModel.findAsync({ parent_id: celeb_id})
      .then(function(results) {
        res.json(results);
      });
  }

  if(media_type == "bing") {
    BingModel.findAsync({ parent_id: celeb_id})
      .then(function(results) {
        res.json(results);
      });
  }

  if(media_type == "soundcloud") {
    SoundcloudModel.findAsync({ parent_id: celeb_id})
      .then(function(results) {
        res.json(results);
      });
  }
});

app.listen(port);

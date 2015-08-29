//WE DON'T PERFORM ERROR HANDLING IN HACKATHONS
//IF HE DIES, HE DIES - Ivan Drago

var Promise = require('bluebird'),
    config = require("config"),
    mongoose = require('mongoose'),
    CelebRepo = require('./server/repositories/celebrity-repo.js'),
    Reaper = require('./server/services/reaper.js'),
    Absolver = require('./server/services/absolver.js');

mongoose.connect(config.get('db_connection_string'));

CelebRepo.fetchCelebrities()
  .then(function(results) {
    return Promise.map(results, function(celebrity) {
      var target_sources = Reaper.acquireTargets(celebrity);

      return Promise.all(target_sources);
    });
  })
  .then(function(reaper_harvest) {
    return Promise.map(reaper_harvest, function(harvest) {
      var bing_results = harvest[0][1].d.results;
      var instagram_results = harvest[1][0];

      return Absolver.cleanResults(bing_results, instagram_results);
    });
  })
  .then(function(absolved_results) {
    console.log(absolved_results);
  });

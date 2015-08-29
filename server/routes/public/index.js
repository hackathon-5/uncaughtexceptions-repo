var express = require('express'),
    router = express.Router();

module.exports = function(app) {
  //router.post('/', candidate_controller.document.addResume);

  router.get('/', function(req, res, next) {
    res.send('hello world');
  });

  app.use(router);

  //app.use('/app/v1/candidate/:user_id/documents/resume', router);
};

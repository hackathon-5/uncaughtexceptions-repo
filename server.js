var express = require('express'),
    app = express(),
    port = 8000;

global.reqlib = require('app-root-path').require;

//configure express options
require('./config/config.js')(app);

//bootstrap routes
require('./server/routes')(app);

app.listen(port);

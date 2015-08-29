var express = require('express'),
    app = express(),
    port = 8000;

global.req = require('app-root-path').require;

//configure express options
require('./config/config.js')(app);

//bootstrap routes
require('./server/routes')(app);

app.listen(port);

var express = require('express');
var http = require('http');
var app = express();
var config = require('./config/config');

require('./config/express')(app, config);

require('./config/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

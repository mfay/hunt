var express = require('express'),
	http = require('http'),
	app = express(),
	config = require('./config/config'),
	fs = require('fs');

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
	if (~file.indexOf('.js')) require(models_path + '/' + file)
})

require('./config/express')(app, config);

require('./config/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

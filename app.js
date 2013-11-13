var express = require('express'),
	http = require('http'),
	app = express(),
	config = require('./config/config'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	passport = require('passport');

mongoose.connect(process.env.MONGOLAB_URI);

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
	if (~file.indexOf('.js')) require(models_path + '/' + file)
})

require('./config/passport')(passport, config);

require('./config/express')(app, config, passport);

require('./config/routes')(app, passport);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

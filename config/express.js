var express = require("express");
var path = require('path');

module.exports = function (app, config) {
	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('654654263FDDASFA6S5'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(config.root + '/public'));

	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}
	console.log("rootPath: " + config.root);
	console.log("views: " + app.get('views'));
};
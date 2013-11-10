var routes = require('../app/controllers/index');
var user = require('../app/controllers/user');

module.exports = function(app) {
	app.get('/', routes.index);
	app.get('/users', user.list);
}
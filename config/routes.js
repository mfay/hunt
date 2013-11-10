var routes = require('../app/controllers/index');
var user = require('../app/controllers/user');
var auth = require('../app/middleware/authorization');

module.exports = function(app) {
	app.get('/', routes.index);
	app.get('/users', auth.requiresLogin, user.list);
}
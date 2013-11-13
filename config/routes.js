var routes = require('../app/controllers/index');
var user = require('../app/controllers/user');
var auth = require('../app/middleware/authorization');

module.exports = function(app, passport) {
	app.get('/', routes.index);
	app.get('/users', auth.requiresLogin, user.list);
	app.get('/user/new', user.admin);
	app.get('/user/login', user.login);
	app.post('/user/session', passport.authenticate('local', {
		successRedirect: '/users', failureRedirect: '/user/login' }));
}
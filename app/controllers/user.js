
var mongoose = require('mongoose')
  , User = mongoose.model('User');

exports.list = function(req, res){
  res.send("respond with a resource");
}

exports.login = function(req, res) {
	res.render('login');
}

exports.admin = function(req, res) {
	var user = new User();
	user.name = req.query.name;
	user.email = req.query.email;
	user.password = req.query.password;
	user.save(function(err, something){
		res.redirect('/');
	});
}
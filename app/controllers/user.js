
var mongoose = require('mongoose')
  , User = mongoose.model('User')

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.admin = function(req, res) {
	var user = new User();
	user.name = req.query.name;
	user.email = req.query.email;
	user.password = req.query.password;
	user.isAdmin = true;
	user.save(function(err, something){
		res.redirect('/');
	});
};
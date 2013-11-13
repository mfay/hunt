
var mongoose = require('mongoose')
  , User = mongoose.model('User');

exports.list = function(req, res){
  res.send("respond with a resource");
}

exports.login = function(req, res) {
	res.render('login');
}

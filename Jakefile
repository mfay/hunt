var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

desc('create a new admin user');
task('seed', function(name, email, password) {
	require('./app/models/user')
	var User = mongoose.model('User');
	var user = new User();
	user.name = name;
	user.email = email;
	user.password = password;
	user.save(function(err, user){
		if (err) console.log(err);
		else console.log("user created");
	});
});
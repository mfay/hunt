var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = Schema({
	name: {type: String, default: ''},
	email: {type: String, default: ''},
	password: {type: String, default: ''},
	isAdmin: {type: Boolean, default: false }
});

mongoose.model('User', UserSchema);
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

var UserSchema = Schema({
	name: {type: String, default: ''},
	email: {type: String, default: ''},
	hashed_password: {type: String, default: ''},
	salt: {type: String, default: ''}
});

UserSchema
	.virtual("password")
	.set(function(password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashed_password = this.encryptPassword(password);
	})
	.get(function(){
		return this._password;
	});

UserSchema.methods = {
	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hashed_password
	},
	makeSalt: function () {
		return Math.round((new Date().valueOf() * Math.random())) + ''
	},
	encryptPassword: function (password) {
		if (!password) return ''
		var encrypred
		try {
		  encrypred = crypto.createHmac('sha1', this.salt).update(password).digest('hex')
		  return encrypred
		} catch (err) {
		  return ''
		}
	}
}

mongoose.model('User', UserSchema);
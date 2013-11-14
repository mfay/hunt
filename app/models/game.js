var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GameSchema = Schema({
	name: {type: String, default: ''}
});

mongoose.model("Game", GameSchema); 

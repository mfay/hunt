var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TeamSchema = Schema({
	name: {type: String, default: ''},
	game: {type: Schema.ObjectId, ref: "GameSchema"},
	score: {type: Number, default: 0}
});

mongoose.model("Team", TeamSchema); 

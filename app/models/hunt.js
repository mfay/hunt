var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var HuntSchema = Schema({
	name: {type: String, default: ''}
});

mongoose.model("Hunt", HuntSchema);

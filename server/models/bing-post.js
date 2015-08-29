var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BingPostSchema = new Schema({
	title: String,
	description: String,
	date_posted: Date,
	bing_id: String,
	source: String,
  url: string
});

module.exports = mongoose.model('Bing', BingPostSchema);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CelebritySchema = new Schema({
	name: String,
	twitter_handle: String,
	facebook: String,
	bing_news: String,
	instagram: String,
  soundcloud: String
});

module.exports = mongoose.model('Celebrity', CelebritySchema);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SoundcloudSchema = new Schema({
	created_time: Date,
	post_id: String,
  track_title: String,
  url: String,
  parent_id: String,
  permalink: String
});

module.exports = mongoose.model('Soundcloud', SoundcloudSchema);

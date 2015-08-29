var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InstagramPostSchema = new Schema({
	created_time: Date,
	post_id: String,
  type: String,
  url: String,
  parent_id: String
});

module.exports = mongoose.model('Instagram', InstagramPostSchema);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TwitterSchema = new Schema({
	tweet_id: String,
	id_str: String,
  parent_id: String,
  created_time: Date
});

module.exports = mongoose.model('Twitter', TwitterSchema);

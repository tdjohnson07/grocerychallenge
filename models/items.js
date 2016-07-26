var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  item: String,
  quanity: Number
});

var Item = mongoose.model('Item', itemSchema);

module.exports= Item;

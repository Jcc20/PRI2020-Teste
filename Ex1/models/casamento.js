var mongoose = require('mongoose')

var avalSchema = new mongoose.Schema({
  date: String,
  title: String,
  _id: String,
  href: String

});

module.exports = mongoose.model('casamentos', avalSchema)
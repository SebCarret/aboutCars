const mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  color: String,
  automatic: String
});

module.exports = mongoose.model('cars', carSchema);

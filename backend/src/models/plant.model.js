const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
  name: String,
  scientificName: String,
  image: String,
  type: String,
  waterNeeds: Number,
  mistNeeds: Number,
  lightNeeds: Number,
  petFriendly: Boolean,
  info: String,
  card: Boolean,
  room: String,
  nextWaterDate: Date,
  nextMistDate: Date,
  nextTransplantDate: Date,
});

module.exports = mongoose.model('Plants', plantSchema);

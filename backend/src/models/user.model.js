const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  surname: String,
  dni: String,
  phone: Number,
  address: String,
  postalCode: Number,
  city: String,
  country: String,
  plants: Array,
});

module.exports = mongoose.model('Users', userSchema);

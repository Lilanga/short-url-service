const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// mongoose schema to store URL information
const URLsSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  url: { type: String, required: true },
});

URLsSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Urls', URLsSchema);

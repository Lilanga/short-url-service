const mongoose = require('mongoose');

// mongoose schema to store URL information
const URLsSchema = new mongoose.Schema({
  code: { type: String, required: true },
  url: { type: String, required: true },
});

module.exports = mongoose.model('Urls', URLsSchema);

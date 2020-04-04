const mongoose = require('mongoose');

const db = mongoose.connect(process.env.DEV_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;

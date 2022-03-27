const mongoose = require('mongoose');
const logger = require('../utils/logUtils');

const initDBConnection = async () => {
  const DB_URI = process.env.DBHOST;
  const DB_USER = process.env.DBUSER;
  const DB_PASS = process.env.DBPASS;

  mongoose
    .connect(DB_URI, {
      authSource: 'admin',
      user: DB_USER,
      pass: DB_PASS,
      useNewUrlParser: true,
    })
    .then(() => {
      logger.info('Database Connected');
    })
    .catch((err) => {
      logger.error(`Failed to connect to database: ${err.message}`);
    });

  mongoose.connection.on('error', (err) => {
    logger.error(`Database connection: ${err.message}`);
  });
};

module.exports = { initDBConnection };

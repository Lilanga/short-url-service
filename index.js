const app = require('./app');
const logger = require('./utils/logUtils');
const { initDBConnection } = require('./db/mongo-db');

const PORT = process.env.PORT || 8081;
initDBConnection();
app.listen(PORT, () => {
  logger.info(`Server is running at port: ${PORT}`);
});

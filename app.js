require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./utils/logUtils');
const { initDBConnection } = require('./db/mongo-db');
const routes = require('./routes');

const PORT = process.env.PORT || 8081;

const app = express();
initDBConnection();

app.use(helmet());
app.use(express.json());
app.use(morgan('combined', { stream: logger.stream }));
app.use('/', routes);
app.use(express.static('build'));

app.listen(PORT, () => {
  logger.info(`Server is running at port: ${PORT}`);
});

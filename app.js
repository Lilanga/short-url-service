require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./utils/logUtils');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('combined', { stream: logger.stream }));
app.use('/', routes);
app.use(express.static('build'));

module.exports = app;

const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 2021;

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const plantsRouter = require('./routes/plants.routes');

server.use('/api/plants', plantsRouter);

server.listen(port,
  () => debug(`Server is running in ${chalk.blue(`localhost:${port}`)}`));

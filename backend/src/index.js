const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const usersRoutes = require('./routes/users.routes');
const plantsRoutes = require('./routes/plants.routes');

require('dotenv').config();
require('./passport/passport.config');
require('./ddbb/mongoose.config');

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
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/', authRoutes);
server.use('/users', usersRoutes);
server.use('/plants', plantsRoutes);

server.listen(port,
  () => debug(`Server is running in ${chalk.blue(`localhost:${port}`)}`));

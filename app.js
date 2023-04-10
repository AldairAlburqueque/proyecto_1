const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users.routes');
const transferRouter = require('./routes/transfer.routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transferRouter);

module.exports = app;

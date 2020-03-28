const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errors} = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(routes);

module.exports = app;
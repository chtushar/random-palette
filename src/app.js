const express = require('express');
const imageRoute = require('./router/image');
const app = express();
require('./db/mongoose');

app.use(express.json());
app.use('/image', imageRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

///////////////////////////////////////////////

module.exports = app;
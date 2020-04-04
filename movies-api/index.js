const express = require('express');

const db = require('./utils/db');

const app = express();

const port = 3000;

app.get('/api', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App is listening on port: http://localhost:${port}`);
  db.then(() => console.log('Successfully connected to the database!'));
});

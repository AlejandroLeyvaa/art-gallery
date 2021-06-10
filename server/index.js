const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

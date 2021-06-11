const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

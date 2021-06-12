const express = require('express');
const gallery = require('./api/components/gallery/network.js');

require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.use('/api/images', gallery);

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

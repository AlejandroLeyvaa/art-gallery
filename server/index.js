const express = require('express');
const cors = require('cors');
const gallery = require('./api/components/gallery/network.js');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public'));
app.use('/api/images', gallery);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

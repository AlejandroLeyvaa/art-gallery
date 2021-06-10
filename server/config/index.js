require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  password: process.env.PASSWORD,
  jwtSecret: process.env.SECRET,
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  imdb: {
    apiKey: process.env.API_KEY,
  },
  cloudinary: process.env.CLOUDINARY_URL,
  cloudinaryURL: process.env.C_URL,
  cloudName: process.env.CLOUDNAME,
  cloudApiKey: process.env.CLOUDAPIKEY,
  cloudSecret: process.env.CLOUDSECRET,
  clear: {
    host: process.env.CLEAR_HOST,
    port: process.env.CLEAR_PORT,
    user: process.env.CLEAR_USER,
    password: process.env.CLEAR_PASS,
    database: process.env.CLEAR_DB,
  }
};

module.exports = { config };
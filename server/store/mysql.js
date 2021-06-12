const mysql = require('mysql');

const { config } = require('../config/index');

const dbConfig = {
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

const clearDB = {
  host: config.clear.host,
  port: config.clear.port,
  user: config.clear.user,
  password: config.clear.password,
  database: config.clear.database,
};

let connection;

function handleConnection() {

  connection = mysql.createConnection(dbConfig || clearDB);

  connection.connect((err) => {
    if (err) {
      console.error('[DB error]', err);
      setTimeout(handleConnection, 2000);
    } else {
      console.log('DB Connected');
    }
  });

  connection.on('error', (err) => {
    console.error('[db err]', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleConnection();
    } else {
      throw err;
    }
  });
}

handleConnection();

function getList(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);

      resolve(data);
    });
  });
}

function getId(table, row, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE ${row}='${id}'`,
      (err, data) => {
        if (err) return reject(err);

        resolve(data);
      }
    );
  });
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
module.exports = {
  getList,
  getId,
  insert,
}
const dotenv = require('dotenv');
dotenv.config();

module.export = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'jc_lovetour',
    host: '127.0.0.1',
    port: '3308',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'jc_lovetour',
    host: '127.0.0.1',
    port: '3308',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'jc_lovetour',
    host: '127.0.0.1',
    port: '3308',
    dialect: 'mysql',
  },
};

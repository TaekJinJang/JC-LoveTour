const maria = require('mysql');

const conn = maria.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'qq160159',
  database: 'jc_lovetour',
});

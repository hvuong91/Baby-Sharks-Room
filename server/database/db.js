const Pool = require('pg').Pool;

const pool = new Pool({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'root',
  port: '5432',
  database: 'baby_sharks_room_db',
});

pool.connect();

module.exports = pool;

const {Pool, Client} = require("pg");


const pool = new Pool({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

function Connect(){
  pool.connect();
}

module.exports = {
  Connect
}

const {Pool, Client} = require("pg");
var async = require('async');

const pool = new Pool({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
});

function connect(){
  pool.connect();
}

function setupSchema(){
    async.series([
      function createSchema(callback){
        pool.query('CREATE SCHEMA IF NOT EXISTS babysharks', callback);
      },
      function createUserTable(callback){
        pool.query('CREATE TABLE IF NOT EXISTS babysharks.users (' +
                          'id SERIAL PRIMARY KEY, ' +
                          'firstName VARCHAR(40), ' +
                          'lastName VARCHAR(40), ' +
                          'userName VARCHAR(40), ' +
                          'email VARCHAR(100), ' +
                          'password VARCHAR(40))', callback);
      }
    ], function (err, result){
      if (err){
        console.log('Exception initializing database.');
        throw err;
      }
      else {
        console.log('Database initialization completed.');
      }
    });
}

module.exports = {
  connect, setupSchema
}

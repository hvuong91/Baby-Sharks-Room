var db = require('../database/db');
var async = require('async');

async function getUsers(){
  return await db.query('SELECT * FROM baby_sharks_room_schema.users');
}

async function getUserById(id){
  return await db.query('SELECT * FROM baby_sharks_room_schema.users WHERE ID=$1', [id]);
}

module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;

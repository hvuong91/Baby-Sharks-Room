var express = require('express');
var router = express.Router();
var usersDAO = require('../models/users');
var async = require('async');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await usersDAO.getUsers();
  res.send(users.rows);
});



module.exports = router;

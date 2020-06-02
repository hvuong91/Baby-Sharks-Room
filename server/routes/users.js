var express = require('express');
var router = express.Router();
var usersDAO = require('../models/users');
var async = require('async');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await usersDAO.getUsers();
  res.send(users.rows);
});


router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const user = await usersDAO.getUserById(id);
  res.send(user.rows[0]);
});

module.exports = router;

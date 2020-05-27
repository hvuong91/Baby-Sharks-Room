var express = require('express');
var router = express.Router();

// create a GET route
router.get('/', (req, res, next) => {
    res.send( 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
});

module.exports = router;
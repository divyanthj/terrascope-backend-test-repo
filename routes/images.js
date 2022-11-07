const { randomUUID } = require('crypto');
var express = require('express');
var router = express.Router();
var DB_IMAGE = require('../constants/dbPath.js')

/* GET images */
router.get('/', function(req, res, next) {
    res.send('');
});

/* GET image by id. */
router.get('/:id', function(req, res, next) {
    res.send('')
});


module.exports = router;

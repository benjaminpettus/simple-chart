var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */
// router.get('/api/cities', db.getAllCities);
router.get('/api/cities', db.getAllCities);

module.exports = router;

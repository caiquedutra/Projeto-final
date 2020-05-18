var express = require('express');
var router = express.Router();

router.get('/search', function (req, res, next) {
    var searchParams = req.query.query.toUpperCase().split(' ');
    var db = require('../db');

});
module.exports = router;
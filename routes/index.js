var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { results: false });
});
router.get('/search', function (req, res, next) {
  var searchParams = req.query.query;
  var db = require('../db');
  var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
  Customer.find({ municipio: { $all: searchParams } }, function (e, docs) {
      res.render('index', { results: true, search: req.query.query, list: docs });

});
})

module.exports = router;

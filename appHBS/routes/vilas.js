var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vilas', { title: 'Vilas' });
});

module.exports = router;

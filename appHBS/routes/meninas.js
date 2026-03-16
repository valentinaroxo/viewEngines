var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('meninas', { title: 'meninas' });
});

router.get('/emilia', function(req, res){
    res.render('emilia');
});

module.exports = router;

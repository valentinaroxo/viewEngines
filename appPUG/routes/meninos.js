var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('meninos', { title: 'meninos' });
});

router.get('/pedrinho', function(req, res){
    res.render('pedrinho');
});

module.exports = router;

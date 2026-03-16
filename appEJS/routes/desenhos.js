var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('desenhos', { title: 'desenhos' });
});

router.get('/turmaMonica', function(req, res){
    res.render('turmaMonica');
});

module.exports = router;


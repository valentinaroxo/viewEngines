var express = require('express');
var router = express.Router();

//simulando lista de preferencia com vetor
const preferencia = [
    {id: 1, nome: "Malévola", filme: "Malévola"},
    {id: 2, nome: "Cruella", filme: "Cruella"},
    {id: 3, nome: "Rainha Má", filme: "Rainha Má"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vilas', {preferencia});
});

module.exports = router;

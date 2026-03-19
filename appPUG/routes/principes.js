var express = require('express');
var router = express.Router();

//simulando lista de preferencia com vetor
const preferencia = [
    {id: 1, nome: "Flynn Rider", filme: "Enrolados"},
    {id: 2, nome: "Príncipe Eric", filme: "A Pequena Sereia"},
    {id: 3, nome: "Príncipe Naveen", filme: "A Princesa e o Sapo"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('principes', {preferencia});
});

module.exports = router;

var express = require('express');
var router = express.Router();

//simulando lista de preferencia com vetor
const preferencia = [
    {id: 1, nome: "Rapunzel", filme: "Enrolados"},
    {id: 2, nome: "Bela", filme: "A Bela e a Fera"},
    {id: 3, nome: "Ariel", filme: "A Pequena Sereia"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('princesas', {preferencia});
});

module.exports = router;

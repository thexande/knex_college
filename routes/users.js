var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var cars = () => {
  return knex('cars')
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  cars().then((resp) => {
    res.send(resp)
  })
});

module.exports = router;

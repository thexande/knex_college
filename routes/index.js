var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/countries', function(req, res, next) {
  knex('country').then((countries) => {
    res.render('table', {countries: countries});
  })
})
router.get('/cities', function(req, res, next) {
  knex('city').then((countries) => {
    res.render('table', {countries: countries});
  })
})
router.get('/capitals', function(req, res, next) {
  knex('country')
    .join('city', 'city.id', '=', 'country.capital')
    .select('city.countrycode', 'country.name')
    .then((countries) => {
      res.render('table', {countries: countries});
    })
})
router.get('/lookup/:name', (req, res, next) => {
  knex.raw(`select * from city where name like '${req.params.name}'`)
    .then((resp) => {
      res.send(resp.rows)
    })
})
router.get('/delete/:id', (req, res, next) => {
  knex.raw(`DELETE FROM city WHERE id = ${req.params.id}`)
    .then((resp) => {
      res.send(resp)
    })
})

module.exports = router;

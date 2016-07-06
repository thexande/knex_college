var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var cars = () => {
  return knex('cars')
}

router.get('/albums', function(req, res){
  Albums().select().then(function(result){
    res.json(result);
  })
})
router.post('/albums', function(req, res){
  Albums().insert({
    artist: req.body.artist,
    name: req.body.name,
    genre: req.body.genre,
    stars: req.body.stars,
    explicit: req.body.explicit
  }, 'id').then(function(result){
    res.json(result);
  })
})
router.put('/albums/:id', function(req, res){
  Albums().where('id', req.params.id).update({
    stars: req.body.stars
  }).then(function(result){
    res.json(result)
  })
})
router.delete('/albums/:id', function(req, res){
  Albums().where('id', req.params.id).del().then(function(result){
    res.json(result);
  })
})

module.exports = router;

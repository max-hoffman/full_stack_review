const db = require('../models');

module.exports = {
  getMoviesCtrl: (req, res) => {
    //query database
    db.Movie.findAll()
    .then(movies => {
      console.log('get movies', movies);
      res.send(movies);
    });
    console.log('get endpoint');
  },
  postMovieCtrl: (req, res) => {
    //add to database
    db.Movie.create(req.body)
    .then(movie => {
      console.log('post movie', movie);
      res.send(movie);
    });
  }
}
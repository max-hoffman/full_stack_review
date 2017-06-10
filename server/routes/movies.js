const db = require('../models');

module.exports = {
  getMoviesCtrl: (req, res) => {
    //query database
    // res.send(movies);
    console.log('get endpoint');
  },
  postMovieCtrl: (req, res) => {
    //add to database
    // res.send(movie);
    console.log('post endpoint');
  }
}
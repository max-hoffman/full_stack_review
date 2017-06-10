const router = require('express').Router();
const movies = require('./movies');

router.get('/movies', movies.getMoviesCtrl);
router.post('/movies', movies.postMovieCtrl);

module.exports = router;
angular.module("movie-displayer")

.service("movieService", function($http) {
  var movies = [];
  return {
    get: () => movies,
    fetch: () => {
      $http.get('/movies')
      .then(results => {
        movies = results.data;
      });
    },
    create: movie => {
      return $http.post('/movies', movie);
    }
  } 
})

angular.module("movie-displayer")

.controller("AppCtrl", function(movieService) {
  this.getCurrentMovies = movieService.get;
  this.createNewMovie = (movie) => {
    movieService.create(movie)
    .then(movie => {
      movieService.fetch();
    });
  };
  this.updateMovies = movieService.fetch;
  (function init() {
    movieService.fetch();
  })();
})

.directive("app", function() {
  return {
    controller: "AppCtrl as ctrl",
    templateUrl: "../templates/app.html",
    bindToController: true,
    scope: {},
    restrict: 'E'
  };
})
angular.module("movie-displayer")

.controller("MovieCtrl", function() {
  
})

.directive("movie", function() {
  return {
    controller: "MovieCtrl as ctrl",
    templateUrl: "../templates/movie.html",
    bindToController: true,
    scope: {
      movie: '<'
    },
    restrict: 'E'
  };
})
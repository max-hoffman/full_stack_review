angular.module("movie-displayer")

.controller("MovieListCtrl", function() {
  
})

.directive("movieList", function() {
  return {
    controller: "MovieListCtrl as ctrl",
    templateUrl: "../templates/movieList.html",
    bindToController: true,
    scope: {
      movies: '<'
    },
    restrict: 'E'
  };
})
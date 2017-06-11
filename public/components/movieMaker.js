angular.module("movie-displayer")

.controller("MovieMakerCtrl", function(movieService) {
  this.onClick = () => this.createMovie(this.movie);
})

.directive("movieMaker", function() {
  return {
    controller: "MovieMakerCtrl as ctrl",
    templateUrl: "../templates/movieMaker.html",
    bindToController: true,
    scope: {
      movie: '@',
      createMovie: '<'
    },
    restrict: 'E',
    link: function(s,e,a,c) {
      console.log(c);
    }
  };
})
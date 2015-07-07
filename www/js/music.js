angular.module("music", ["ngResource", "ngRoute"]).
  config(function($routeProvider) {
    $routeProvider.
      when("/", {
        controller: "TopArtistsController",
        controllerAs: "top",
        templateUrl: "/templates/top_artists.html",
      }).
      when("/artists/:artist_id", {
        controller: "AlbumsController",
        controllerAs: "ac",
        templateUrl: "/templates/albums.html"
      }).
      when("/artists/:artist_id/albums/:album_id", {
        controller: "SongsController",
        controllerAs: "sc",
        templateUrl: "/templates/songs.html"
      }).
      otherwise({
        redirectTo: "/",
      });
  }).
  factory("Artist", function($resource) {
    return $resource("/api/artists/:id");
  });

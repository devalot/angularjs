angular.module("music").
  controller("SongsController", function($routeParams, $resource) {
    var Song = $resource("/api/artists/:artist_id/albums/:album_id/songs/:id");

    this.songs = Song.query({
      artist_id: $routeParams.artist_id,
      album_id:  $routeParams.album_id,
    });
  });

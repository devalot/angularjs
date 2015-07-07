angular.module("music").
  controller("AlbumsController", function($routeParams, $resource, Artist) {
    var Album = $resource("/api/artists/:artist_id/albums/:id");
    this.albums = Album.query({artist_id: $routeParams.artist_id});
    this.artist = Artist.get({id: $routeParams.artist_id});
  });

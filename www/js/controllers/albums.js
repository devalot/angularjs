angular.module("music").
  controller("AlbumsController", function(artist, albums) {
    this.artist = artist;
    this.albums = albums;
  });

angular.module("music").
  controller("SongsController", function(artist, album, songs) {
    this.artist = artist;
    this.album  = album;
    this.songs  = songs;
  });

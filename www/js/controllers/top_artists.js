angular.module("music").
  controller("TopArtistsController", function(artists) {
    var self = this;
    self.artists = artists;

    self.addArtist = function() {
      self.artists.push({name: "Some Name"});
    };
  });

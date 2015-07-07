angular.module("music").
  controller("TopArtistsController", function(Artist) {
    var self = this;
    self.artists = Artist.query();

    self.addArtist = function() {
      self.artists.push({name: "Some Name"});
    };
  });

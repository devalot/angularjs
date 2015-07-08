angular.module("music").
  controller("ShowCartController", function(cart) {
    this.albums      = cart.albums;
    this.total       = cart.total;
    this.removeAlbum = cart.removeAlbum;
    this.isEmpty     = cart.isEmpty;
    this.clear       = cart.clear;
  });

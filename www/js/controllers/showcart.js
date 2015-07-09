angular.module("music").
  controller("ShowCartController", function($state, cart) {
    this.albums      = cart.albums;
    this.total       = cart.total;
    this.removeAlbum = cart.removeAlbum;
    this.isEmpty     = cart.isEmpty;
    this.clear       = cart.clear;

    this.showForm = function() {
      $state.go("cart.form");
    };
  });

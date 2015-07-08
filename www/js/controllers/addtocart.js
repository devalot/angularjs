angular.module("music").
  controller("AddToCartController", function(cart) {
    this.addAlbum    = cart.addAlbum;
    this.removeAlbum = cart.removeAlbum;
    this.hasAlbum    = cart.hasAlbum;
  });

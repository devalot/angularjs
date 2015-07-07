angular.module("music").
  controller("ShowCartController", function(cart) {
    this.cart = cart;

    this.isEmpty = function() {
      return cart.albums.length === 0;
    };

    this.removeAlbum = function(album) {
      var index = cart.albums.indexOf(album);
      if (index === -1) return;
      cart.total -= cart.albums[index].price;
      cart.albums.splice(index, 1);
    };
  });

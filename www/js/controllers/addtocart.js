angular.module("music").
  controller("AddToCartController", function(cart) {
    this.addAlbum = function(artist, album) {
      album.artist_name = artist.name;
      cart.total += album.price;
      cart.albums.push(album);
    };

    this.albumInCart = function(album) {
      return cart.albums.indexOf(album) !== -1;
    };
  });

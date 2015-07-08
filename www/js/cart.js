angular.module("music").
  service("cart", function() {
    var cart = {
      total:  0,
      albums: [],
    };

    var findItem = function(array, id) {
      for (var i=0; i < array.length; ++i) {
        if (array[i].id === id) return i;
      }

      return null;
    };

    this.total = function() {
      return cart.total;
    };

    this.count = function() {
      return cart.albums.length;
    };

    this.albums = function() {
      return cart.albums;
    };

    this.isEmpty = function() {
      return cart.albums.length === 0;
    };

    this.hasAlbum = function(album) {
      return findItem(cart.albums, album.id) !== null;
    };

    this.addAlbum = function(album) {
      if (!this.hasAlbum(album)) {
        cart.albums.push(album);
        cart.total += album.price;
      }
    };

    this.removeAlbum = function (album) {
      var index = findItem(cart.albums, album.id);

      if (index !== null) {
        cart.total -= cart.albums[index].price;
        cart.albums.splice(index, 1);
      }
    };

    this.clear = function() {
      cart.total = 0;
      cart.albums.splice(0, cart.albums.length);
    };
  });

angular.module("music").
  controller("CartTallyController", function(cart) {
    this.totalPrice = cart.total;
    this.totalItems = cart.count;
  });

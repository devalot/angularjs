angular.module("music").
  controller("CartFormController", function($state, $scope, cart) {
    this.total = cart.total;

    this.customer = {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    };

    this.purchase = function() {
      if ($scope.checkout.$invalid) return;
      cart.purchase(this.customer);
      $state.go("cart.thankyou");
    };

    this.returnToCart = function() {
      $state.go("cart");
    };
  });

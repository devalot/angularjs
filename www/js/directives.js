angular.module("music").
  directive("musicBuy", function() {
    return {
      restrict: "A",
      //replace: true,

      scope: {
        album: "=",
      },

      templateUrl: "/templates/music_buy.html",

      controller: function($scope, cart) {
        $scope.hasAlbum    = cart.hasAlbum;
        $scope.addAlbum    = cart.addAlbum;
        $scope.removeAlbum = cart.removeAlbum;
      },
    };
  }).
  directive("musicTally", function() {
    return {
      restrict: "A",
      scope: {},

      templateUrl: "/templates/cart_tally.html",

      controller: function($scope, cart) {
        $scope.totalPrice = cart.total;
        $scope.totalItems = cart.count;
      },
    };
  });

angular.module("music", ["ngResource", "ui.router"]).
  config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.
      state("root", {
        abstract: true,

        views: {
          "": {},

          "tally": {
            templateUrl: "/templates/cart_tally.html",
            controller: "CartTallyController as tally",
          },
        },
      }).
      state("artists", {
        parent: "root",
        url: "/",

        views: {
          "@": {
            templateUrl: "/templates/top_artists.html",
            controller: "TopArtistsController as top",
          },
        },

        resolve: {
          artists: function(Artist) {
            return Artist.query().$promise;
          },
        },
      }).
      state("albums", {
        parent: "root",
        url: "/artists/:artist_id",

        views: {
          "@": {
            templateUrl: "/templates/albums.html",
            controller: "AlbumsController as ac",
          }
        },

        resolve: {
          artist: function($stateParams, Artist) {
            return Artist.get({
              id: $stateParams.artist_id,
            }).$promise;
          },
          albums: function($stateParams, Album) {
            return Album.query({
              artist_id: $stateParams.artist_id,
            }).$promise;
          },
        },
      }).
      state("albums.songs", {
        url: "/albums/:album_id",
        templateUrl: "/templates/songs.html",
        controller: "SongsController as sc",

        resolve: {
          album: function($stateParams, Album) {
            return Album.get({
              artist_id: $stateParams.artist_id,
              id:        $stateParams.album_id,
            }).$promise;
          },
          songs: function($stateParams, Song) {
            return Song.query({
              artist_id: $stateParams.artist_id,
              album_id:  $stateParams.album_id,
            }).$promise;
          }
        },
      }).
      state("cart", {
        parent: "root",
        url: "/cart",

        views: {
          "@": {
            templateUrl: "/templates/showcart.html",
            controller: "ShowCartController as show",
          },
        },
      });
  }).
  factory("Artist", function($resource) {
    return $resource("/api/artists/:id");
  }).
  factory("Album", function($resource) {
    return $resource("/api/artists/:artist_id/albums/:id");
  }).
  factory("Song", function($resource) {
    return $resource("/api/artists/:artist_id/albums/:album_id/songs/:id");
  });

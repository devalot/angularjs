angular.module("music", ["ngResource", "ui.router"]).
  config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.
      state("artists", {
        url: "/",
        templateUrl: "/templates/top_artists.html",
        controller: "TopArtistsController as top",

        resolve: {
          artists: function(Artist) {
            return Artist.query().$promise;
          },
        },
      }).
      state("albums", {
        url: "/artists/:artist_id",
        templateUrl: "/templates/albums.html",
        controller: "AlbumsController as ac",

        resolve: {
          artist: function($stateParams, Artist) {
            return Artist.get({
              id: $stateParams.artist_id,
            }).$promise;
          },
          albums: function($stateParams, $resource, artist) {
            var Album = $resource("/api/artists/:artist_id/albums/:id", {}, {
              "query": {
                method: "GET",
                isArray: true,
                transformResponse: function(data) {
                  // 1. Convert raw data from JSON.
                  var albums = angular.fromJson(data);

                  // 2. Attach artist_name to all albums.
                  albums.forEach(function(album) {
                    album.artist_name = artist.name;
                  });

                  // 3. Return the transformed data.
                  return albums;
                },
              }
            });

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
        url: "/cart",

        views: {
          "": {
            templateUrl: "/templates/showcart.html",
            controller: "ShowCartController as show",
          },
        },
      }).
      state("cart.form", {
        views: {
          "@": {
            templateUrl: "/templates/cart_form.html",
            controller: "CartFormController as cartForm",
          },
        },
      }).
      state("cart.thankyou", {
        views: {
          "@": {
            templateUrl: "/templates/cart_thankyou.html",
            controller: function() {},
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

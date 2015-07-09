describe("TopArtistsController", function() {
  var $controller;

  var fakeArtists = [
    {id: 1, name: "foo"},
    {id: 2, name: "bar"},
  ];

  beforeEach(module("music"));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it("should assign artists to the scope", function() {
    var scope      = {};
    var controller = $controller("TopArtistsController", {
      "$scope":  scope,
      "artists": fakeArtists,
    });

    expect(controller.artists).toBeDefined();
    expect(controller.artists[0].name).toEqual("foo");
    expect(controller.addArtist).toBeDefined();
  });

  it("should create a new artist when addArtist is called", function() {
    var controller = $controller("TopArtistsController", {
      "artists": fakeArtists,
    });

    expect(controller.artists.length).toEqual(2);

    controller.addArtist();
    expect(controller.artists.length).toEqual(3);
  });
});

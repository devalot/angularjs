describe("the cart service", function() {
  var cart;

  beforeEach(module("music"));

  beforeEach(inject(function(_cart_) {
    cart = _cart_;
  }));

  it("cart is injected correctly", function() {
    expect(cart).toBeDefined();
  });

  it("cart total correctly changes", function() {
    // 1: Create a fake album (needs price and id).
    var album = {
      id: 1,
      price: 12.99,
    };

    // 2: Add that album to your cart.
    cart.addAlbum(album);

    // 3: Ensure the cart's price goes up correctly.
    expect(cart.total()).toBeCloseTo(12.99);
  });

  it("cart total goes up and down", function() {
    cart.addAlbum({id: 1, price: 1});
    cart.addAlbum({id: 2, price: 2});
    expect(cart.total()).toEqual(3);

    cart.removeAlbum({id: 1, price: 1});
    expect(cart.total()).toEqual(2);
  });
});

describe("My Music Store", function() {
  it("should have loaded angular", function() {
    expect(angular).toBeDefined();
  });

  it("should have defined a module named 'music'", function() {
    expect(angular.module("music")).toBeDefined();
  });
});

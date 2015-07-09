describe("Top Artists", function() {
  beforeEach(function() {
    browser.get("/#/");
  });

  it("Has correct H1 element", function() {
    var h1 = element(by.css("h1"));
    expect(h1.getText()).toContain("Welcome");
  });
});

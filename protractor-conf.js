exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  specs: [
    "test/ui/*.spec.js",
  ],

  baseUrl: "http://localhost:3000",

  capabilities:  {
    browserName: "chrome",
  }
};

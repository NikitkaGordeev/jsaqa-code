const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "g9fpzb",
    baseUrl: "https://petstore.swagger.io/",
    retries:0,
  },
});

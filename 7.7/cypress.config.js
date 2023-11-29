const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "7y89c5",
    baseUrl: "https://petstore.swagger.io/",
    retries:0,
  },
});

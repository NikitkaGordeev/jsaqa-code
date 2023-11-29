const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1ozoiz",
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/",
    retries:0,
  },
});

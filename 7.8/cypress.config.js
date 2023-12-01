const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ttxhvq",
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/",
    retries:0,
  },
});

const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const {
  Given,
  When,
  Then,
  Before,
  After
} = require("cucumber");
const {
  clickElement,
  getText
} = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given('I am on the booking page', async function () {
 return await this.page.goto("https://qamid.tmweb.ru/client/index.php", {
    timeout: 10000
  });
});

When('I click on the day of the week', async function () {
  return await clickElement(this.page, "a:nth-child(2) > span.page-nav__day-week");
});

When('I click on the movie seance time', async function () {
  await clickElement(this.page, "a.movie-seances__time");
});

When('I click on a seat', async function () {
  await clickElement(this.page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(5)");
});

When('I click on two seats', async function () {
  await clickElement(this.page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(5)");
  await clickElement(this.page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(6)");
});

When('I click on the accept button', async function () {
  await clickElement(this.page, "button.acceptin-button");
});

Then('I should see a message confirming the seat selection', async function () {
  const actual = await getText(this.page, "h2.ticket__check-title");
  expect(actual).to.contain("Вы выбрали билеты:");
});

Then('the accept button should be disabled', async function () {
  const actual = await this.page.$eval("button.acceptin-button", (e) =>
    e.getAttribute("disabled"));
  expect(actual).to.contain("true");
});
let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team", {timeout: 10000});
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});

describe("Github page second tests", () => {
  test("The h1 header content features page", async () => {
    await page.goto("https://github.com/features",);
    const title = "h1.h1-mktg.col-7-max.mx-auto";
    await page.waitForSelector(title, {visible: true,});
    const actual = await page.$eval(title, (element) => element.textContent);
    const expected = "The tools you need to build what you want.";
    expect(actual).toEqual(expected);
  });
  test("The h1 header content enterprise page", async () => {
    await page.goto("https://github.com/enterprise",);
    const title = "#hero-section-brand-heading";
    await page.waitForSelector(title, {visible: true,});
    const actual = await page.$eval(title, (element) => element.textContent);
    const expected = "The AI-powereddeveloper platform.";
    expect(actual).toEqual(expected);
  });
  test("The h1 header content resources page", async () => {
    await page.goto("https://resources.github.com");
    const title = "#home-hero > div > h1";
    await page.waitForSelector(title, {visible: true,});
    const actual = await page.$eval(title, (element) => element.textContent);
    const expected = "Resources to help enterprise teams do their best work";
    expect(actual).toEqual(expected);
  });
});

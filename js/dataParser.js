const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/luismartinez/thinklikeahorse/thinklikeahorse/index-3.html"
  );
  const element = await page.$(".col2 .row2");
  const text = await page.evaluate(
    () => document.querySelector(".col2 .row2").innerHTML
  );

  console.log("WHAT IS text", text);

  await browser.close();
})();

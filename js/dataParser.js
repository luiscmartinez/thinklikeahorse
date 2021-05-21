const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlFile = "primal_human_fear";
  await page.goto(
    `file:///Users/luismartinez/thinklikeahorse/thinklikeahorse/${htmlFile}.html`
  );
  // const element = await page.$(".col2 .row2");
  const content = await page.evaluate(
    () => document.querySelector(".wrapper .col2").innerHTML
  );

  const fs = require("fs");

  fs.writeFile(
    `/Users/luismartinez/thinklikeahorse/thinklikeahorse/js/data/${htmlFile}.txt`,
    content,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("WRITE IS SUCCESSFUL");
      //file written successfully
    }
  );

  await browser.close();
})();

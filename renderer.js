// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const puppeteer = require("puppeteer");

async function scraper(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const title = await page.title();
  await browser.close();
  return title;
}

document.querySelector("button").addEventListener("click", async function() {
  const result = await scraper("http://example.com");
  document.querySelector("#result").innerHTML = result;
});

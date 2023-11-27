const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({headless: false});
  // const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  page.setViewport({width: 1280, height: 1024})
  await page.goto('https://flightsafety.com', {waitUntil: 'load', timeout: 0});
//   await page.goto('https://flightsafety.com');  

  const PILOT_TRAINING = "body > header > div > nav > section > ul > li:nth-child(1) > ul > li > div > div > div > div:nth-child(1) > ul > li:nth-child(1) > a"

  page.setDefaultNavigationTimeout(0);
  const navigationPromise = page.waitForNavigation();
  await page.click(PILOT_TRAINING); // trigger a navigation
  await navigationPromise;

  page.screenshot({ path: 'screenshots/pt.png' })


  await browser.close();
}

run();
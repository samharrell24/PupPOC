const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // Navigate to the FlightSafety International website
  await page.goto('https://www.flightsafety.com/');

  // Wait for the page to load
  await page.waitForSelector('body');

  const PILOT_TRAINING = "body > header > div > nav > section > ul > li:nth-child(1) > ul > li > div > div > div > div:nth-child(1) > ul > li:nth-child(1) > a"

  // Click on the link to the Pilot Training section
  const navigationPromise = page.waitForNavigation();
  await page.click(PILOT_TRAINING);
  await navigationPromise;

  page.screenshot({ path: 'screenshots/pt22.png' })

  
  // You can add additional logic here to interact with the content of the Pilot Training section if needed

  // Close the browser
  await browser.close();
})();

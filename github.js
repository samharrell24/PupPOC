const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://github.com/login');
  await page.screenshot({ path: 'screenshots/github.png', fullPage: true });

  const BUTTON_SELECTOR = '#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button'
  const USERNAME_SELECTOR = '#login_field'
  const PASSWORD_SELECTOR = '#password'
  
//   const CREDS = require('./creds')
  
  await page.click(USERNAME_SELECTOR)
  await page.type(process.env.GITHUB_USER)
  await page.click(PASSWORD_SELECTOR);
  await page.type(process.env.GITHUB_PWD);

  
  await Promise.all([page.click(BUTTON_SELECTOR),page.waitForNavigation(BUTTON_SELECTOR)])




  browser.close();
}

run();
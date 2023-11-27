const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({headless: false});
  // const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto('https://github.com/login');
  await page.screenshot({ path: 'screenshots/github.png' });

  const BUTTON_SELECTOR = '#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button'
  const USERNAME_SELECTOR = '#login_field'
  const PASSWORD_SELECTOR = '#password'
  
  // const CREDS = require('./creds')

  await page.click(USERNAME_SELECTOR)
  await page.keyboard.type("samharrell24")
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type("");
  await page.click(BUTTON_SELECTOR)
  await page.screenshot({ path: 'screenshots/github_loaded.png' });
  // login
  // move around the site (waitForNavigation)
  // 

  await browser.close();
}

run();
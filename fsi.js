const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({headless:false, slowMo: 10});
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 1024})

  await page.goto('https://www.flightsafety.com/', {waitUntil: "load"});
  const PILOT_TRAINING = "body > header > div > nav > section > ul > li:nth-child(1) > ul > li > div > div > div > div:nth-child(1) > ul > li:nth-child(1) > a"

  const gs = 'body > section:nth-child(6) > div > a > button'
  const b1 = '#TrainingType > div > div.mdl-card__supporting-text.open > ul > li:nth-child(1) > button'
  const b2 = '#Manufacturer > div > div.mdl-card__supporting-text.open > ul > li:nth-child(9) > button'
  const b3 = '#Manufacturer > div > div.mdl-card__supporting-text.open > ul > li:nth-child(9) > button'
  const b4 = '#Model > div > div.mdl-card__supporting-text.open > ul > li > button'
  const b5 = '#Objective > div > div.mdl-card__supporting-text.open > ul > li:nth-child(1) > button'
  const b6 = '#LearningCenter > div > div.mdl-card__supporting-text.open > ul > li > button'

  const menu = '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div:nth-child(1) > div'
  sd2024 = '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div:nth-child(1) > div > ul > li:nth-child(2)'

  const feb2024 = '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(1) > li:nth-child(3) > button'
  const april2024 = '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(1) > li:nth-child(5) > button'
  const aug2024 = '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(2) > li:nth-child(2) > button'
  const oct2024 = '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(2) > li:nth-child(5) > button'

  const selectors = [
    '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(1) > li:nth-child(3) > button',
    '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(1) > li:nth-child(5) > button',
    '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(2) > li:nth-child(2) > button',
    '#StartDate > div > div.mdl-card__supporting-text.open > ul > div > div.month-list > div > div:nth-child(2) > li:nth-child(5) > button'
  ];

  const flight = "#results-card > div.mdl-card__supporting-text > ul > li:nth-child(1) > span.mdl-list__item-secondary-content > a"

  await Promise.all([
    page.click(gs),
    page.waitForNavigation({ waitUntil: "networkidle0" }),
  ]);

  await page.click(b1)
  // await page.evaluate(() => {
  //   window.scrollBy(0, 100);
  // });
  await page.click(b2)
  await page.click(b3)
  await page.click(b4)
  // await page.evaluate(() => {
  //   window.scrollBy(0, 100);
  // });
  await page.click(b5)
  await page.click(b6)

  await page.click(menu)
  await page.click(sd2024)

  for (const selector of selectors){
    await page.click(selector)
  }
  await page.screenshot({ path: 'screenshots/form.png' })

  await page.click(flight)

  const next = "#panel_1 > div > div.box_login_1 > div.content_login_1.desc > div > table > tbody > tr:nth-child(2) > td > a > img"
  await page.click(next)
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });

  await page.screenshot({ path: 'screenshots/reservationRequest.png' })

  // await page.click(flight)
  
  // const listItems = document.querySelectorAll('#results-card > div.mdl-card__supporting-text > ul')

  // for (let i = 0; i < listItems.length; i++) {
  //   alert (listItems[i].textContent);
  // }

  // get items from #results-card > div.mdl-card__supporting-text > ul
  // $('ul li').each(funciton(i))
  // {
  //   $(this).attr('rel'); // This is your rel value
  // }




  await browser.close();
})();

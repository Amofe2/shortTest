const puppeteer = require ('puppeteer');

const screenshot = '1.png';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://login.sentryc.com/auth/login');
    await page.type('input[name=email]', 'KAY@gmail.com')
    await page.type('input[name=password]', 'C0mputer!')
    await page.click('button[type=submit]')
    await page.waitForNavigation()
    await page.screenshot({ path: screenshot});
    browser.close()
  console.log('See screenshot: ' + screenshot)




})();
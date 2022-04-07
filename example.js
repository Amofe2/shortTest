const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });
  await page.type('#id_0.13235081046824093', 'kay@gmail.com')
  await page.waitForSelector('#id_0.04488025646135552')
await page.click('#id_0.04488025646135552')
await page.type('#id_0.04488025646135552', 'C0nnect!')
await page.evaluate(()=>{
    document.body.innerHTML = "Hello!";
})

//   await browser.close();
})();
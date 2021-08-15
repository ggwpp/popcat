const puppeteer = require('puppeteer');

(async () => {
  var web = "https://popcat.click"

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(web,{"waitUntil" : "networkidle0"});

  for(i =0; i< 5000; i++) {
    await page.type('.cat-img', 'hello world', {delay: 100})
    console.log(i*10)
  }
  await sleep(5000);
  await page.screenshot({path: 'popcat.png'});
  await browser.close();
})();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

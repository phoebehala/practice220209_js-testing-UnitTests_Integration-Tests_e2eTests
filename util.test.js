const puppeteer = require('puppeteer');

const {generateText, checkAndGenerate} = require('./util');


/* unit test */
test('should output name and age',()=>{

    // double checks to avoid false possitive 
    const text = generateText('Ali',20)
    expect(text).toBe('Ali (20 years old)')

    const text2 = generateText('Bob',30)
    expect(text2).toBe('Bob (30 years old)')
})


// test the opposite 
test('should output name and age',()=>{
    const text = generateText('',null)
    expect(text).toBe(' (null years old)')
})


/* integration test */
test('should generate a valid text output', ()=>{
    const text = checkAndGenerate('Ali',20)
    expect(text).toBe('Ali (20 years old)')
})


/* end to end test */
test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({   //  puppeteer.launch() >>> returns a propmise
      headless: true,
       slowMo: 80,
       args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
      'file:///Users/phoebe/Desktop/myPractice/practice220209_js-testing-UnitTests_Integration-Tests_e2eTests/index.html'
    );
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)');
  }, 10000);
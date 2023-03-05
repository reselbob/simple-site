const chromeDriver = require('selenium-webdriver/chrome');
const CHROME_BIN_PATH = '/usr/bin/google-chrome';

const options = new chromeDriver.Options();
options.setChromeBinaryPath(CHROME_BIN_PATH);
options.addArguments(
    'headless',
    // Use --disable-gpu to avoid an error from a missing Mesa library, as per
    // https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
    'disable-gpu',
    'no-sandbox'
);

const {Builder, By, Key, until} = require('selenium-webdriver')
const assert = require('assert')

describe('Test-01', function () {
    this.timeout(30000)
    let driver
    beforeEach(async function () {
        driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    })
    afterEach(async function () {
        await driver.quit();
    })
    it('Test-01', async function () {
        await seleniumTest(driver);
    })
})

const seleniumTest = async (driver) => {
    const name = "Bob";
    await driver.get("http://www.localhost:8080/")
    await driver.manage().window().setRect({width: 600, height: 600})
    await driver.findElement(By.id("yourName")).click()
    await driver.findElement(By.id("yourName")).sendKeys(name)
    await driver.findElement(By.id("btnMessage")).click()
    const txtValue = await driver.findElement(By.id("yourName")).getText();
    const msgValue = await driver.findElement(By.id("msgHeading")).getText();
    assert.equal(msgValue, 'Hello ' + name, 'The text is not as expected');
}

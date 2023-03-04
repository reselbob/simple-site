// Generated by Selenium IDE
const {Builder, By, Key, until} = require('selenium-webdriver')
const assert = require('assert')

describe('Test-01', function () {
    this.timeout(30000)
    let driver
    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
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

const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


(async function testNextJsHomePage() {

    // set the browser options
    // const options = new chrome.Options().addArguments('--headless').setBinaryPath("/usr/local/bin/");
    const options = new chrome.Options().setBinaryPath("/usr/local/bin");

    // initialize the webdriver
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        // Navigate to the Next.js home page
        await driver.get('http://localhost:3000');

        // Verify the page title (h1)
        let titleElement = await driver.findElement(By.tagName('h1'));
        let titleText = await titleElement.getText();
        console.log('Title Text:', titleText);

        if (titleText === 'Welcome to My Next.js App') {
            console.log('Title Test Passed!');
        } else {
            console.error('Title Test Failed!');
        }

        // Verify the paragraph text
        let paragraphElement = await driver.findElement(By.tagName('p'));
        let paragraphText = await paragraphElement.getText();
        console.log('Paragraph Text:', paragraphText);

        if (paragraphText.includes('This is a simple homepage')) {
            console.log('Paragraph Test Passed!');
        } else {
            console.error('Paragraph Test Failed!');
        }

        // Click the button
        let buttonElement = await driver.findElement(By.tagName('button'));
        await buttonElement.click();

        console.log('Button Clicked!');
    } catch (error) {
        console.error('Test Error:', error);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();

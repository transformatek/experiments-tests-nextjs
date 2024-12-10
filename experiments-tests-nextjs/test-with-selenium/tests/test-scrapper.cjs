// import statements
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function scraper() {

    // set the browser options
    const options = new chrome.Options().addArguments('--headless').setBinaryPath("/usr/local/bin");

    // initialize the webdriver
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        // navigate to the target webpage
        await driver.get('https://www.scrapingcourse.com/infinite-scrolling');

        // extract HTML of the target webpage
        const html = await driver.getPageSource();
        console.log(html);

    } catch (error) {
        // handle error  
        console.error('An error occurred:', error);
    } finally {
        // quit browser session 
        await driver.quit();
    }

}
scraper();

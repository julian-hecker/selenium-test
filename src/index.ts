import { Builder } from 'selenium-webdriver';

import { SearchPage } from './pages/SearchPage';

async function main() {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    const searchPage = new SearchPage(driver);
    
    await searchPage.load();
    
    await searchPage.search('crap');
    
    await searchPage.clickSearch();
  } catch (err) {
    console.error(err);
  } finally {
    await driver.quit();
  }
}

main();

// https://training.saucelabs.com/codelabs/Module3-SeleniumJS/index.html#2
// https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/

import { Builder, WebDriver } from 'selenium-webdriver';
import { ResultsPage, SearchPage } from '../src/pages';

describe('Search Page', () => {
  let driver: WebDriver;
  let searchPage: SearchPage;
  let resultsPage: ResultsPage;

  beforeAll(async () => {
    driver = new Builder().forBrowser('chrome').build();
  });

  test('loads', async () => {
    searchPage = new SearchPage(driver);
    await searchPage.load();
    expect(searchPage.isLoaded()).resolves.toBe(true);
  });

  test('can input a query', async () => {
    await searchPage.search('robots');
    expect(searchPage.getSearchbarText()).resolves.toEqual('robots');
  });

  test('can search a query', async () => {
    resultsPage = await searchPage.clickSearch();
    expect(resultsPage.isLoaded()).resolves.toBe(true);
  });

  test('can click search results', async () => {
    resultsPage.clickResultWithTitle('robots');
    expect(driver.getTitle()).resolves.toMatch('AAA');
  });

  afterAll(async () => {
    await driver.sleep(4000);
    await driver.quit();
  });
});

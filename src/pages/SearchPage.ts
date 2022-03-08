import { By, Key, WebDriver } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  private pageUrl: string = 'https://google.com';

  private searchInput = By.name('q');
  private searchButton = By.name('btnK');

  constructor(driver: WebDriver) {
    super(driver);
  }

  async load(): Promise<void> {
    await this.driver.get(this.pageUrl);
  }

  async search(query: string): Promise<void> {
    await this.sendKeys(this.searchInput, query);
  }

  async clickSearch(): Promise<void> {
    await this.click(this.searchButton);
  }

}

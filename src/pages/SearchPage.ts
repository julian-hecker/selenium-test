import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from './BasePage';
import { ResultsPage } from './ResultsPage';

export class SearchPage extends BasePage {
  private pageUrl: string = 'https://google.com';

  private searchInput = By.name('q');
  private searchButton = By.name('btnK');

  constructor(driver: WebDriver) {
    super(driver);
  }

  public async load(): Promise<void> {
    await this.driver.get(this.pageUrl);
  }

  public async isLoaded(): Promise<boolean> {
    return await this.titleMatches(/Google/);
  }

  public async search(query: string): Promise<void> {
    await this.sendKeys(this.searchInput, query);
  }

  public async getSearchbarText(): Promise<string> {
    return await this.find(this.searchInput).getAttribute('value');
  }

  public async searchDisplayed(): Promise<boolean> {
    return await this.isDisplayed(this.searchInput);
  }

  public async clickSearch(): Promise<ResultsPage> {
    await this.click(this.searchButton);
    return new ResultsPage(this.driver);
  }
}

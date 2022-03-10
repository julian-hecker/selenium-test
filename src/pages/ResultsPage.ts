import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class ResultsPage extends BasePage {
  constructor(driver: WebDriver) {
    super(driver);
  }

  public async clickResultWithTitle(title: string): Promise<void> {
    
    await this.click(By.xpath(`//a[contains(text(), ${title})]`));
  }

  public async isLoaded(): Promise<boolean> {
    return await this.titleMatches(/[.]*Google Search/);
  }
}

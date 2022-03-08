import {
  Locator,
  until,
  WebDriver,
  WebElementPromise,
} from 'selenium-webdriver';

export class BasePage {
  protected driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  protected find(locator: Locator): WebElementPromise {
    try {
      return this.driver.findElement(locator);
    } catch (err) {
      console.error(`Failed to find locator ${locator}`, err);
    }
  }

  protected async visit(url: string): Promise<void> {
    try {
      return await this.driver.get(url);
    } catch (err) {
      console.error(`Failed to visit URL ${url}`, err);
    }
  }

  protected async click(
    locator: Locator,
    timeout: number = 10000,
  ): Promise<void> {
    try {
      const element = await this.driver.wait(
        until.elementLocated(locator),
        timeout,
      );
      await this.driver.wait(
        until.elementIsVisible(element),
        timeout,
      );
      await this.driver.wait(
        until.elementIsEnabled(element),
        timeout,
      );
      return await element.click();
    } catch (err) {
      console.error(`Failed to click ${locator}`, err);
    }
  }

  protected async isDisplayed(locator: Locator): Promise<boolean> {
    return await this.find(locator).isDisplayed();
  }

  protected async sendKeys(
    locator: Locator,
    ...keys: any[]
  ): Promise<void> {
    try {
      return await this.find(locator).sendKeys(...keys);
    } catch (err) {
      console.log(`Failed to send keys ${keys} to ${locator}`, err);
    }
  }
}

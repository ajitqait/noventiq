import { test, expect, Page } from "@playwright/test";
import { CommonScenario } from "./commonScenario";


export class CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
    }

    public getValue(key: string) {
        const value = this.scenario.getValue(key);
        return value;
    }

    public setValue(key: string, value: string) {
        this.scenario.setValue(key, value);
    }

    async takeScreenshot(name: string) {
        await this.scenario.takeScreenshot(name);
    }
    async navigateToURL(applicationUrl: string) {
        await this.page.goto(applicationUrl);
      }
    
      async clickElement(locator: string): Promise<void> {
        await this.page.waitForSelector(locator);
        await this.page.click(locator, { timeout: 90000 });
      }
    
      async enterElementText(locator: string, text): Promise<void> {
        await this.page.waitForSelector(locator, { state: "visible" });
        await this.page.fill(locator, text);
      }
    
      async getTextFromWebElement(locator: string): Promise<string> {
        await this.page.waitForSelector(locator);
        return (await this.page.textContent(locator)) ?? "";
      }
    
      async verifyMessage(actualText, expectedText: string): Promise<void> {
        expect(actualText).toEqual(expectedText);
      }
      async verifyCurrentUrl(expectedValue: string): Promise<void> {
        await expect(this.page.url()).toContain(expectedValue);
      }

}
import { expect, Page, } from "@playwright/test";
import { CommonPage } from "../../base/common/commonPage";
import { CommonScenario } from "../../base/common/commonScenario";
import { testData } from "../../data/testData";
import { locators } from "../LoginPage/loginPageLocators";

export class LoginPage extends CommonPage {
  constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
  }
  async goTo() {
    await this.page.goto(testData.qa);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async Login(username, password) {
    await this.enterElementText(locators.userName,username)
    await this.enterElementText(locators.password,password)
    await this.clickElement(locators.submitButton)
  }
  async verifyMessageAfterLogin(headerMessage,successMessage,currentUrlText){
    const headerText = await this.getTextFromWebElement(locators.postLoginHeader)
    this.verifyMessage(headerText,headerMessage)
    const successData = await this.getTextFromWebElement(locators.successMessage)
    this.verifyMessage(successData,successMessage)
    this.verifyCurrentUrl(currentUrlText)
  }
  async verifyErrorMessage(errorText){
    const error = await this.getTextFromWebElement(locators.errorMessage)
    this.verifyMessage(error,errorText)
  }
  async logout(){
    await this.clickElement(locators.logout)
  }
}
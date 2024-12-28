import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../../pageObjects/LoginPage/loginPage";
import { CommonPage } from "../common/commonPage";
import { CommonScenario } from "../common/commonScenario";

interface PageObjects {
    loginPage: LoginPage;
    commonScenarioPage: CommonScenario;
    commonPage: CommonPage,
}

const test = baseTest.extend<PageObjects>({
    commonScenarioPage: async ({ page }, use, testinfo) => {
        await use(new CommonScenario(page, testinfo));
    },
    loginPage: async ({ page, commonScenarioPage }, use) => {
        await use(new LoginPage(page, commonScenarioPage));
    }
});

test.beforeEach(async ({ browser }) => {
   
});

test.afterEach(async ({ page}) => {
   await page.close();
});

export default test;
export const expect = test.expect;
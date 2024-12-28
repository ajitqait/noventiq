import { Page, TestInfo } from "@playwright/test";
export class CommonScenario {
    private map = new Map<string, string>();
    constructor(public page: Page, public testinfo: TestInfo) {
    }

    async takeScreenshot(name: string) {
        this.testinfo.attach(`${this.testinfo.title}_${name} `, {
            contentType: "image/png",
            body: await this.page.screenshot({
                fullPage: true
            })
        });
    }

    setValue(key: string, value: string) {
        this.map.set(key, value);
    }

    getValue(key: string) {
        return this.map.get(key);
    }

}
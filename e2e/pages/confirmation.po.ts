import { globalMethods } from "../utils/globalMethods";

export class ConfirmationPage {

    getDashboardTitle() {
        return globalMethods.getElementByXpath("//p[text()='Service queues']");
    }

    async dashboardTitleIsDisplayed(expectedTitle: string) {
        const titleElement = await this.getDashboardTitle();
        await titleElement.waitForDisplayed({ timeout: 10000 });

        const actualText = await titleElement.getText();
        await expect(actualText).toContain(expectedTitle);
    }
}

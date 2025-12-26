import { Then } from "@wdio/cucumber-framework";
import { ConfirmationPage } from '../../pages/confirmation.po';

const confirmationPage = new ConfirmationPage();

Then("user verify page title is displayed as {string}", async (expectedTitle: string) => {
  await confirmationPage.dashboardTitleIsDisplayed(expectedTitle);
});


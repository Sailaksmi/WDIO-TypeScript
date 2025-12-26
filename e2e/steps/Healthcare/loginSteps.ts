import { Given, When } from '@wdio/cucumber-framework';
import { LoginPage } from '../../pages/login.po';

const loginPage = new LoginPage();

Given("I am on OpenMRS login page", async () => {
  await browser.url("https://o3.openmrs.org/openmrs/spa/login");
});

When("I enter username {string}", async (username: string) => {
  await loginPage.enterUsername(username);
});

When("I click on Continue button", async () => {
  await loginPage.continueButtonOnloginPage();
});

When("I enter password {string}", async (password: string) => {
  await loginPage.enterPassword(password);
});

When("I click on Login button", async () => {
  await loginPage.clickLoginButton();
});

/* 🔥 DYNAMIC LOCATION */
// When("I select location {string}", async (location: string) => {
//   await loginPage.selectClinicAndConfirm(location);
// });

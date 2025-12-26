import { globalMethods } from "../utils/globalMethods";

export class LoginPage {

  getUsernameField() {
    return globalMethods.getElementById('username');
  }

  getContinueButton() {
    return globalMethods.getElementByXpath("//button[text()='Continue']");
  }

  getPasswordField() {
    return globalMethods.getElementByName("password");
  }

  getLoginButton() {
    return globalMethods.getElementByXpath("//button[text()='Log in']");
  }

//   /* 🔥 DYNAMIC LOCATION */
//   getLocation(location: string) {
//     return globalMethods.getElementByXpath(`//span[text()='${location}']`);
//   }

  async enterUsername(username: string) {
    await globalMethods.setValue(this.getUsernameField(), username);
  }

  async continueButtonOnloginPage() {
    await globalMethods.click(this.getContinueButton());
  }

  async enterPassword(password: string) {
    await globalMethods.setValue(this.getPasswordField(), password);
  }

  async clickLoginButton() {
    await globalMethods.click(this.getLoginButton());
  }

//   async selectClinicAndConfirm(location: string) {
//     await globalMethods.click(this.getLocation(location));
//   }
}

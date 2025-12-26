import type { ChainablePromiseElement } from 'webdriverio';

export class globalMethods {

  static getElementById(id: string): ChainablePromiseElement {
    return $(`#${id}`);
  }

  static getElementByName(name: string): ChainablePromiseElement {
    return $(`[name="${name}"]`);
  }

  static getElementByXpath(xpath: string): ChainablePromiseElement {
    return $(xpath);
  }

  static async waitForElement(
    element: ChainablePromiseElement,
    timeout: number = 10000
  ): Promise<void> {
    await element.waitForDisplayed({ timeout });
  }

  static async click(element: ChainablePromiseElement): Promise<void> {
    await this.waitForElement(element);
    await element.click();
  }

  static async setValue(
    element: ChainablePromiseElement,
    value: string
  ): Promise<void> {
    await this.waitForElement(element);
    await element.setValue(value);
  }
}

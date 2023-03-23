import { default_timeout } from "../config/settings.js";

export function browserHelper(selector, timeout = default_timeout) {
  async function findElement() {
    await $(selector).waitForDisplayed({ timeout });
    return $(selector);
  }

  async function clickElement() {
    await $(selector).waitForEnabled({ timeout });
    await $(selector).click();
  }

  async function setValue(value) {
    const element = await findElement();
    await element.setValue(value);
  }

  async function getElementText() {
    const element = await findElement();
    return element.getText();
  }

  async function selectCategory() {
    await $(selector).selectByVisibleText("Авто, Мото");
  }

  return { findElement, clickElement, setValue, getElementText, selectCategory };
}

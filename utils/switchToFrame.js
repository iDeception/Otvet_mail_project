import { browserHelper } from "./browserHelper.js";

const selectors = {
  LOGIN_DIALOG_IFRAME: '//*[@class="ag-popup__frame__layout__iframe"]',
};

async function switchFrame() {
  const iFrame = await browserHelper(selectors.LOGIN_DIALOG_IFRAME).findElement();
  await browser.switchToFrame(iFrame);
}

const switchToLoginFrame = { switchFrame };

export default switchToLoginFrame;

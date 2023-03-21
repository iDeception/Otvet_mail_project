import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  LOGIN_BUTTON: '//button[@class="ph-login svelte-1hiqrvn"]',
  LOGIN_DIALOG: "#login-content",
  EMAIL_FIELD: '//input[@name="username"]',
  ENTER_PASSWORD_BUTTON: '//button[@data-test-id="next-button"]',
  PASSWORD_FIELD: '//input[@name="password"]',
  SIGN_IN_BUTTON: '//button[@data-test-id="submit-button"]',
};

async function login(login, password) {
  await browser.maximizeWindow();
  await browser.url("https://otvet.mail.ru/");
  await browserHelper(selectors.LOGIN_BUTTON).clickElement();
  await browserHelper(selectors.EMAIL_FIELD, 20000).setValue(login);
  await browserHelper(selectors.ENTER_PASSWORD_BUTTON).clickElement();
  await browserHelper(selectors.PASSWORD_FIELD).setValue(password);
  await browserHelper(selectors.SIGN_IN_BUTTON).clickElement();
}

const loginDialog = { login };
export default loginDialog;

import { expect } from "chai";
import loginDialog from "../../pageobjects/loginDialog.js";
import sideBar from "../../pageobjects/sideBar.js";
import creds from "../../testData/creds.js";
import cookiesDialog from "../../pageobjects/cookiesDialog.js";
const userName = "testing.ground@mail.ru";

describe("Login", async () => {
  before(async () => {
    await loginDialog.login(creds.LOGIN, creds.PASSWORD);
    await cookiesDialog.acceptCookies();
  });

  it("Shoud be correct username after login", async () => {
    await sideBar.openSideBar();
    const actualUserName = await sideBar.getActualUserName();
    expect(userName).to.equal(actualUserName);
    await sideBar.closeSideBar();
  });
});

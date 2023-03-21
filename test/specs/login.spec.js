import { expect } from "chai";
import loginDialog from "../../pageobjects/loginDialog.js";
import sideBar from "../../pageobjects/sideBar.js";
import creds from "../../testData/creds.js";
const loggedinUser = "testing.ground@mail.ru";

describe("Login", async () => {
  before(async () => {
    await loginDialog.login(creds.LOGIN, creds.PASSWORD);
  });

  it("Shoud be correct user after login", async () => {
    await sideBar.openSidebar();
    const actualUsername = await sideBar.getActualUserName();
    expect(loggedinUser).to.equal(actualUsername);
  });
});

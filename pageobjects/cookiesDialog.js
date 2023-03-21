import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  ACCEPT_BUTTON: "#cmpbntyestxt",
  REJECT_BUTTON: "#cmpbntnotxt",
};

async function acceptCookies() {
  await browserHelper(selectors.ACCEPT_BUTTON).clickElement();
}

async function rejectCookies() {
  await browserHelper(selectors.REJECT_BUTTON).clickElement();
}

const cookiesDialog = { acceptCookies, rejectCookies };
export default cookiesDialog;

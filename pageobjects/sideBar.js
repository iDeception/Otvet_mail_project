import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  SIDEBAR_BUTTON: '//div[@class="ph-project ph-project__account svelte-1hiqrvn ph-project-any"]',
  USERNAME_FROM_SIDEBAR: '//div[@class="ph-desc svelte-6ia8p0"]',
};

async function openSidebar() {
  await browserHelper(selectors.SIDEBAR_BUTTON).clickElement();
}

async function getActualUserName() {
  return browserHelper(selectors.USERNAME_FROM_SIDEBAR).getElementText();
}

const sideBar = { openSidebar, getActualUserName };
export default sideBar;

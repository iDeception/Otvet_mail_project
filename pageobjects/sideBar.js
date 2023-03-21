import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  OPEN_SIDEBAR_BUTTON: '//div[@class="ph-project ph-project__account svelte-1hiqrvn ph-project-any"]',
  CLOSE_SIDEBAR_BUTTON: '//div[@class="ph-project ph-project__account svelte-1hiqrvn ph-project-any ph-project_open"]',
  USERNAME_FROM_SIDEBAR: '//div[@class="ph-desc svelte-6ia8p0"]',
};

async function openSideBar() {
  await browserHelper(selectors.OPEN_SIDEBAR_BUTTON).clickElement();
}

async function closeSideBar() {
  await browserHelper(selectors.CLOSE_SIDEBAR_BUTTON).clickElement();
}

async function getActualUserName() {
  return browserHelper(selectors.USERNAME_FROM_SIDEBAR).getElementText();
}

const sideBar = { openSideBar, closeSideBar, getActualUserName };
export default sideBar;

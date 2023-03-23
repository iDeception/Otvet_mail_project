import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  ASK_QUESTION_BUTTON: '//div[text()="Задать вопрос"]',
  QUESTION_SUBJECT_FIELD: "#question_text",
  QUESTION_TEXT_FIELD: '//div[@name="question_additional"]/div',
  QUESTION_CATEGORY_DROPDOWN: '//div[@name="select_parents_categories"]/div',
  LIST_OF_CATEGORIES: '//div[@name="select_parents_categories"]/div/div/div/div[2]',
  QUESTION_SUBCATEGORY_DROPDOWN: '//span[text()="Выберите подкатегорию"]',
  LIST_OF_SUBCATEGORIES: '//div[@name="select_childs_categories"]/*/div[@class="XtYcT"]',
  PUBLISH_QUESTION_BUTTON: '//div[contains(text(),"Опубликовать вопрос")]',
};

async function clickAskQuestionButton() {
  await browserHelper(selectors.ASK_QUESTION_BUTTON).clickElement();
}

async function enterQuestionSubject(subject) {
  await browserHelper(selectors.QUESTION_SUBJECT_FIELD).setValue(subject);
}

async function enterQuestionText(text) {
  await browserHelper(selectors.QUESTION_TEXT_FIELD).setValue(text);
}

async function selectQuestionCategory() {
  await browserHelper(selectors.QUESTION_CATEGORY_DROPDOWN).clickElement();
  await browser.pause(5000);
  await browserHelper(selectors.LIST_OF_CATEGORIES).selectCategory();
}

async function selectQuestionSubcategory() {
  await browserHelper(selectors.QUESTION_SUBCATEGORY_DROPDOWN).clickElement();
  await browserHelper(selectors.LIST_OF_SUBCATEGORIES).selectByVisibleText("JavaScript");
}

async function clickPublishQuestionButton() {
  await browserHelper(selectors.PUBLISH_QUESTION_BUTTON).clickElement();
}

const askQuestion = { clickAskQuestionButton, enterQuestionSubject, enterQuestionText, selectQuestionCategory, selectQuestionSubcategory, clickPublishQuestionButton };
export default askQuestion;

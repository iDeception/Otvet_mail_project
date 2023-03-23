import { browserHelper } from "../utils/browserHelper.js";

const selectors = {
  ASK_QUESTION_BUTTON: '//div[text()="Задать вопрос"]',
  QUESTION_SUBJECT_FIELD: "#question_text",
  QUESTION_TEXT_FIELD: '//div[@name="question_additional"]/div',
  QUESTION_CATEGORY_DROPDOWN: '//div[@name="select_parents_categories"]/div',
  QUESTION_SUBCATEGORY_DROPDOWN: '//span[text()="Выберите подкатегорию"]',
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

async function selectQuestionCategory(category) {
  await browserHelper(selectors.QUESTION_CATEGORY_DROPDOWN).clickElement();
  await browserHelper(`//*[text()="${category}" and @class="u2mHx"]`).clickElement();
}

async function selectQuestionSubcategory(subcategory) {
  await browserHelper(selectors.QUESTION_SUBCATEGORY_DROPDOWN).clickElement();
  await browserHelper(`//*[text()="${subcategory}" and @class="u2mHx"]`).clickElement();
}

async function clickPublishQuestionButton() {
  await browserHelper(selectors.PUBLISH_QUESTION_BUTTON).clickElement();
}

const askQuestion = { clickAskQuestionButton, enterQuestionSubject, enterQuestionText, selectQuestionCategory, selectQuestionSubcategory, clickPublishQuestionButton };
export default askQuestion;

import { expect } from "chai";
import loginDialog from "../../pageobjects/loginDialog.js";
import creds from "../../testData/creds.js";
import cookiesDialog from "../../pageobjects/cookiesDialog.js";
import askQuestion from "../../pageobjects/askQuestion.js";
import { questions } from "../../testData/questionData.js";

questions.forEach((question) => {
  const { subject, text, category, subcategory } = question;
  describe(`Question: ${subject}`, async () => {
    before(async () => {
      await loginDialog.login(creds.LOGIN, creds.PASSWORD);
      await cookiesDialog.acceptCookies();
      await askQuestion.clickAskQuestionButton();
      await askQuestion.enterQuestionSubject(subject);
      await askQuestion.enterQuestionText(text);
      await askQuestion.selectQuestionCategory(category);
      await askQuestion.selectQuestionSubcategory(subcategory);
      await askQuestion.clickPublishQuestionButton();
    });

    it("Shoud verify if question was published", async () => {});
  });
});

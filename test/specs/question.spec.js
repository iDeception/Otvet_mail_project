import { expect } from "chai";
import loginDialog from "../../pageobjects/loginDialog.js";
import creds from "../../testData/creds.js";
import cookiesDialog from "../../pageobjects/cookiesDialog.js";
import askQuestion from "../../pageobjects/askQuestion.js";
import { questionSubject } from "../../testData/questionSubject.js";
import { questionText } from "../../testData/questionText.js";

describe("Question", async () => {
  before(async () => {
    await loginDialog.login(creds.LOGIN, creds.PASSWORD);
    await cookiesDialog.acceptCookies();
    await askQuestion.clickAskQuestionButton();
    await askQuestion.enterQuestionSubject(questionSubject);
    await askQuestion.enterQuestionText(questionText);
    await askQuestion.selectQuestionCategory();
    await askQuestion.selectQuestionSubcategory();
    await askQuestion.clickPublishQuestionButton();
  });

  it("Shoud verify if question was published", async () => {});
});

import {commonMethods} from "../../common/CommonMethods";
import {readCsvFile} from "../../data/Data";
import {homepage} from "../../pages/Homepage";
import {loginPage} from "../../pages/LoginPage";

beforeEach(() => {
    commonMethods.setUncaughtOriginErrorFalse();
    readCsvFile();
});

describe('Data Driven Test with CSV', () => {
    it('login scenarios with data present CSV', () => {
        let csvRows = Cypress.env('csvData');
        csvRows.forEach((row) => {
            const {username, password} = row;
            commonMethods.visitPage(Cypress.env('baseUrl'));
            homepage.clickOnMyAccount();
            loginPage.login(username, password);
            loginPage.clickOnLoginButton();
            commonMethods.doLoginAssertions(username, password);
        });
    });
});

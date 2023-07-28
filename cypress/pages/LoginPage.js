import {commonMethods} from "../common/CommonMethods";

export class LoginPage {
    //this method will login the user
    login(username, password) {
        commonMethods.typeTextIntoElement('#username', username);
        commonMethods.typeTextIntoElement('#password', password);
    };

    clickOnLoginButton() {
        commonMethods.clickOnElementByText('[type="submit"]', 'Login')
    };
};

export const loginPage = new LoginPage();
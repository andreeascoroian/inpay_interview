import {userAccountPage} from "../pages/UserAccountPage";

export class CommonMethods {
    //this method visits any page inserted as parameter
    visitPage(pageURL) {
        cy.visit(pageURL);
    };

    //this method will type any text into an input web element that is inserted as parameter
    typeTextIntoElement(webElement, text) {
        cy.get(webElement)
            .should('be.visible')
            .clear()
            .type(text, {force: true, delay: 0});
    };

    //this method will click on an element based on its text
    clickOnElementByText(webElement, text) {
        cy.contains(webElement, text)
            .should('be.visible')
            .click();
    };

    doLoginAssertions(username, password) {
        if (username === 'inpay_valid_email@gmail.com' && password === 'inpay_valid_password') {
            userAccountPage.assertUserLoggedInAndLogout();
        } else if (password === 'invalid_password') {
            cy.get('.woocommerce-error').contains(`The password you entered for the username ${username} is incorrect.`);
        } else if (username === 'invalid_email' && password === 'invalid_password') {
            cy.get('.woocommerce-error').contains(`The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`);
        } else {
            cy.get('.woocommerce-error').contains(`The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`);
        }
    }

    //this method will set the 'uncaught:exception' to false
    setUncaughtOriginErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    };
};

export const commonMethods = new CommonMethods();

export class UserAccountPage {
    //this method will check if the user is logged in and log out
    assertUserLoggedInAndLogout() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Logout')) {
                cy.contains('Logout').click();
            }
        });
    };
};

export const userAccountPage = new UserAccountPage();
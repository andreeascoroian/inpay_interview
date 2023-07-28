import {commonMethods} from "../common/CommonMethods";

export class Homepage {
    clickOnMyAccount() {
        commonMethods.clickOnElementByText('#header #main-nav .menu-item', 'My Account');
    }
};

export const homepage = new Homepage();
const BasePage = require("../utils/base.page");


const ANDROID_SELECTORS={
    BTN_LOGOUT:'//android.widget.TextView[@text="Logout"]'
};
const IOS_SELECTORS={};


class UserProfilePage extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async clickLogoutBtn(){
        await this.clickOnElement(this.selectors.BTN_LOGOUT);
    }
}

module.exports = new UserProfilePage();
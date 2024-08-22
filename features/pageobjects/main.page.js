const BasePage = require('../utils/base.page');

const ANDROID_SELECTORS={
    LNK_LOG_IN:'//android.widget.TextView[@text="Sign in"]',
    BTN_CREATE_ACCOUNT:'//android.widget.TextView[@text="Create account"]'
}

const IOS_SELECTORS = {}

class MainPage extends BasePage{
    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async waitUntilPageIsLoaded(){
        await this.waitElementIsLoaded(this.selectors.BTN_CREATE_ACCOUNT);
    }

    async returnCreateAccountBtnIsDisplayed(){
        return await this.isElementDisplayed(this.selectors.BTN_CREATE_ACCOUNT);
    }

    async clickSignInBtn(){
        await this.clickOnElement(this.selectors.LNK_LOG_IN);
    }

}
module.exports = new MainPage();
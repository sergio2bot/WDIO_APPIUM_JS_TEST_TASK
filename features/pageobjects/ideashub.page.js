const BasePage = require('../utils/base.page');

const ANDROID_SELECTORS={
    TRENDING_EVENTS:'//android.widget.TextView[@text="Trending Events"]',
    BOTTOM_MENU_ITEM:'//android.view.View[@content-desc="{item}"]',
    BTN_CREATE_ACCOUNT:'//android.widget.TextView[@text="Create account"]'
};
const IOS_SELECTORS = {};


class IdeasHubPage extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async waitUntilPageIsLoaded(){
        await this.waitElementIsLoaded(this.selectors.TRENDING_EVENTS);
    }


    async returnIfCreateAccountIsDisplayed(){
        return await this.isElementDisplayed(this.selectors.BTN_CREATE_ACCOUNT);
    }

    async clickOnBottomMenuItem(item){
        this.clickOnElement(this.selectors.BOTTOM_MENU_ITEM.replace('{item}',item));
    }
   
    

}

module.exports = new IdeasHubPage();
const BasePage = require("../utils/base.page");

const ANDROID_SELECTORS = {
    MARKET_NAME:'//android.widget.TextView[@text="{name}"]',
    FIRST_CURRENCY_PAIR:'//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'
}
const IOS_SELECTORS = {};

class MarketsPage extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async waitUntilPageIsLoaded(){
        await this.waitElementIsLoaded(this.selectors.FIRST_CURRENCY_PAIR);
    }

    async returnIfForexIsDisplayed(){
        const loc = await this.selectors.MARKET_NAME.replace('{name}','Forex');
        return this.isElementDisplayed(loc);
    }

    async clickOnFirstCurrPair(){
      await this.clickOnElement(this.selectors.FIRST_CURRENCY_PAIR);
    }


}
module.exports= new MarketsPage();
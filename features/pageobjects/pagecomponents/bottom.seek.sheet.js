const BasePage=require("../../utils/base.page")

const ANDROID_SELECTORS={
   HOW_MUCH_TOINVEST_TEXT:'//android.widget.TextView[@text="..."]'
};
const IOS_SELECTORS={};

class BottomSeekSheet extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async clickOnHowMuchToInvest(){
        await this.clickOnElement(this.selectors.HOW_MUCH_TOINVEST_TEXT);
    }

}

module.exports = new BottomSeekSheet();
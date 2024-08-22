const BasePage= require("../utils/base.page")
const BottomSeekSheet = require("../pageobjects/pagecomponents/bottom.seek.sheet")


const ANDROID_SELECTORS={
    BTN_SELL_BUY:'//android.view.ViewGroup[contains(@content-desc,"{buySell}")]/android.widget.TextView[@text="{buySell}"]'
};

const IOS_SELECTORS = {};

class ForexPairTradingPage extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async clickOnBuySellBtn(buyOrSell){
        await this.clickOnElement(this.selectors.BTN_SELL_BUY.replaceAll('{buySell}',buyOrSell));
    }

    async clickOnHowMuchToInvest(){
        await BottomSeekSheet.clickOnHowMuchToInvest();
    }
}

module.exports = new ForexPairTradingPage();
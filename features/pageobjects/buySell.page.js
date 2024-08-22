const { assert } = require("console");
const BasePage = require("../utils/base.page");

const ANDROID_SELECTORS={
    AMOUNT_FIELD:'//android.widget.TextView[@text="| $0"]',
    BTN_CONFIRM:'//android.widget.TextView[@text="Confirm"]'
};
const IOS_SELECTORS = {};

class BuySellPage extends BasePage{
    
    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

  async waitUntilPageIsLoaded(){
    await this.waitElementIsLoaded(this.selectors.AMOUNT_FIELD);
  }

 async enterAmount(amount){
    await this.enter1fromKeyboard();
    await this.hideKeyboard();
 }

 async clickOnConfirmButton(){
    await this.clickOnElement(this.selectors.BTN_CONFIRM);
 }

}

module.exports = new BuySellPage();
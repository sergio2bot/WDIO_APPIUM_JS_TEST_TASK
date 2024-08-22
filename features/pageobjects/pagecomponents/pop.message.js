const BasePage = require("../../utils/base.page");

const ANDROID_SELECTORS={
    BTN_GOT_IT:'//android.view.ViewGroup[@content-desc="Got it"]'
};
const IOS_SELECTORS = {};

class PopMessage extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS)
    }

  async textIsDisplayedInPopUpMessage(text){
    return await this.textViewElementWithTextIsDisplayed(text);
  }

async clickOnGotItBtn(){
    await this.clickOnElement(this.selectors.BTN_GOT_IT);
}


}



module.exports = new PopMessage();
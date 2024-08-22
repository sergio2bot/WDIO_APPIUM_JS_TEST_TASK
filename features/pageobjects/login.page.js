const BasePage = require('../utils/base.page');


const ANDROID_SELECTORS={
    EDIT_TEXT_FLD:'//android.widget.TextView[@text="{name}"]/../android.widget.EditText',
    BTN_SIGN_ING:'//android.view.ViewGroup[@content-desc="Sign in"]',
    ALLOW_NOTIFICATIONS:'//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]'
};
const IOS_SELECTORS={};

class LoginPage extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async fillInLoginPasswordField(text,field){
        await this.fillInTextElement(this.selectors.EDIT_TEXT_FLD.replace('{name}',field),text);
    }

    async clickOnSignInButton(){
        await this.clickOnElement(this.selectors.BTN_SIGN_ING);
    }


    async returnTextFromLoginFld(fld){
      return  await this.getElementText(this.selectors.EDIT_TEXT_FLD.replace('{name}',fld));
    }

    async clickAllowNotifications(){
        await this.clickOnElement(this.selectors.ALLOW_NOTIFICATIONS);
    }

}
module.exports = new LoginPage();
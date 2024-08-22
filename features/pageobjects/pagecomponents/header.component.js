const BasePage = require("../../utils/base.page")

const ANDROID_SELECTORS={
    USER_ICON:'//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView',
    BACK_ARROW:'//android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView'
};

const IOS_SELECTORS={};

class HeaderComponent extends BasePage{

    constructor(){
        super();
        this.addSelectors(ANDROID_SELECTORS,IOS_SELECTORS);
    }

    async clickOnUserIcon(){
        await this.clickOnElement(this.selectors.USER_ICON);
    }

    async clickOnGoBackArrow(){
        await this.clickOnElement(this.selectors.BACK_ARROW);
    }
}

module.exports = new HeaderComponent();
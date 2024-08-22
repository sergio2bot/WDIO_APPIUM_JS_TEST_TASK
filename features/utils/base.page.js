const DEFAULT_SWIPE_MS = 1000;
const DEFAULT_UPPER_OFFSET = 800;
const DEFAULT_LOWER_OFFSET = 500;

const ANDROID_SELECTORS={
    TEXT_VIEW_ELEMENT:'//android.widget.TextView[@text="{text}"]'
};
const IOS_SELECTORS={};

module.exports = class BasePage {
    constructor() {
      this.selectors = driver.isAndroid ? ANDROID_SELECTORS : IOS_SELECTORS;
    }
  
    addSelectors(androidSelectors, iosSelectors) {
      this.selectors = {
        ...this.selectors,
        ...(driver.isAndroid ? androidSelectors : iosSelectors)
      };
    }
  
    async waitElementIsLoaded(elementLocator) {
      let elements;
      await driver.waitUntil(async () => {
        elements = await $$(elementLocator);
        return elements.length > 0;
      }, {timeoutMsg: 'Page or page element is not correctly loaded' });
    }

    async tapOnField(locator){
        await $(locator).click();
    }
    
    async clearField(locator){
        await $(locator).clearValue();
    }
    async fillInTextElement(locator,text){
        await $(locator).addValue(text);
    }
  
    async textViewElementWithTextIsDisplayed(text){
        const el = await this.selectors.TEXT_VIEW_ELEMENT.replace('{text}',text);
        return $(el).isDisplayed();
    }
  
  
    async isKeyboardShown() {
      await driver.setTimeouts(3000);
      return driver.isKeyboardShown();
    }

    async enter1fromKeyboard(){
        await driver.pressKeyCode(8);
    }
  
    async hideKeyboard(){
        await driver.hideKeyboard();
    }
   
  
    async getElementText(locator) {
      const element = await $(locator);
      let text;
      if (await driver.isAndroid) {
        text = await element.getText();
        if (text === '') {
          text = await element.getAttribute('resource-id');
        }
      } else {
        text = await element.getAttribute('label');
        if (text === '' || text === null) {
          text = await element.getAttribute('value') ? element.getAttribute('value') : element.getAttribute('name');
        }
      }
      return text;
    }
  
  
    async clickOnElement(locator) {
      await $(locator).click();
    }
  
    async isElementDisplayed(locator) {
      return $(locator).isDisplayed();
    }

  
  }
  

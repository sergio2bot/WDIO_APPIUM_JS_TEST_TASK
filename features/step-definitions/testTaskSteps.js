const {Given,When,Then}= require("@wdio/cucumber-framework")
const assert = require("assert")

const MainPage = require("../pageObjects/main.page")
const LoginPage = require("../pageobjects/login.page")
const IdeasHubPage =require("../pageobjects/ideashub.page")
const MarketsPage = require("../pageobjects/markets.page")
const ForexPairTradingPage = require("../pageobjects/forexpairtrading.page")
const BuySellPage = require("../pageobjects/buySell.page")
const PopMessage = require("../pageobjects/pagecomponents/pop.message")
const HeaderComponent = require("../pageobjects/pagecomponents/header.component")
const UserProfilePage = require("../pageobjects/userprofile.page")


Given(/^the user is on the main page$/,async function(){
    assert.equal(await MainPage.returnCreateAccountBtnIsDisplayed(),true,"Main app page is not opened");
});

//=======================ACTIONS===========================

When(/^the user clicks on the Sign in link$/,async function(){
    await MainPage.clickSignInBtn();
})

When(/^the user enters "(.*)" in the "(.*)" field on Login Page$/,async function(fldName,text){
    await LoginPage.fillInLoginPasswordField(fldName,text);
})

When(/^the user clicks on the Sign in button on Login Page$/,async function(){
    await LoginPage.clickOnSignInButton();
    await LoginPage.clickAllowNotifications();
})


When(/^the user clicks on the "(.*)" on the bottom menu of Ideas Hub page$/,async function(botomMenuItem){
    await IdeasHubPage.waitUntilPageIsLoaded();
    await IdeasHubPage.clickOnBottomMenuItem(botomMenuItem);
})

When(/^the user clicks on the first pair of currencies$/,async function(){
    await MarketsPage.waitUntilPageIsLoaded();
    await MarketsPage.clickOnFirstCurrPair();
})

When(/^the user clicks on the "(.*)" on the ForexPairTrading page$/,async function(buySell){
    await ForexPairTradingPage.clickOnBuySellBtn(buySell);
})

When(/^the user clicks on How much to invest field$/,async function(){
    await ForexPairTradingPage.clickOnHowMuchToInvest();
})

When(/^the user enters amount "(.*)" into Amount field$/,async function(amount){
    await BuySellPage.waitUntilPageIsLoaded();
    await BuySellPage.enterAmount(amount);
})

When(/^the user clicks on the Confirm button$/,async function(){
    await BuySellPage.clickOnConfirmButton();
})

When(/^the user clicks on "Got it" button$/,async function(){
    await PopMessage.clickOnGotItBtn();
})

When(/^the user clicks on the Back button in the header$/,async function(){
    await HeaderComponent.clickOnGoBackArrow();
})

When(/^the user clicks on the Profile icon in the header$/,async function(){
    await HeaderComponent.clickOnUserIcon();
})


When(/^the user clicks on the Logout button on the User Profile page$/,async function(){
    await UserProfilePage.clickLogoutBtn();
})
//========================Assertions=========================

Then(/^the user sees "(.*)" in the "(.*)" field on Login Page$/,async function(expectedText,fld){
    assert.equal(await LoginPage.returnTextFromLoginFld(fld),expectedText,"Text in the "+fld+" field is not the same as expected: "+expectedText);
})

Then(/^the user sees Markets page is opened$/,async function(){
    await MarketsPage.waitUntilPageIsLoaded();
    assert.equal(MarketsPage.returnIfForexIsDisplayed(),true,"Forex market is not present on the Markets page");
})

Then(/^the user sees "(.*)" text is present in pop up message$/,async function(text){
  await PopMessage.textIsDisplayedInPopUpMessage(text);
})


Then(/^the user sees Create Account button is available on the IdeasHub page$/,async function(){
    assert.equal(await IdeasHubPage.returnIfCreateAccountIsDisplayed(),true,"Create Account button is not displayed on Ideas Hub");
})

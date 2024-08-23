# README #

## Repository description
This repo contains implementation of the test task for the Mobile application of trading platform. 
Test framework is based on `WDIO+JS+APPIUM`.
This framework is made for Android with posisbility to easily add IOS. As IOS support partially implemented

## Test case covered
User logs in into the application, navigates to Forex Market and Tries to open a position for the first pair of Currencies. However, as user didn't finish account verification process, he receives an  Error message that something went wrong. User navigates back and logs out from the application

## Environment setup

* Install **Android Studio**

  * [Android Studio](https://developer.android.com)

* Install **Android SDK**

  * [Android SDK](https://developer.android.com/studio/#downloads)
  * Create a new Android Studio Project with default settings for *API 30(Or Desired API)* and *No Activity*.
  * Continue to import and install any settings suggested by the SDK.

* Install **node modules**

  * Make sure you have installed node (**node version should be 20 or higher**).
  * After clonning the repository run: `npm install`

* Install **Appium** and **Appium Inspector**
These tools will help to find the locators of the different elements for development.

  * [Appium](https://appium.io/)
  * [Appium inspector](https://github.com/appium/appium-inspector)

**Note:** it is better before running the test - restart Appium server.

**Note:** you need to have Android emulator running and the apk should be installed on this emulator


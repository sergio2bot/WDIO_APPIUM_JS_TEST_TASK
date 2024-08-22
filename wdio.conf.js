const path = require("path");

const REPORT_DIR = path.resolve(process.cwd(), "reports");
const JSON_REPORT_DIR = path.resolve(REPORT_DIR, "json");


const ANDROID_CAPABILITY={
    maxInstances:1,
    "appium:deviceName": "Pixel 8",
    "platformName": "Android",
    "appium:appPackage": "com.amega.app",
    "appium:appActivity": ".MainActivity"
};

let SUITE_CONFIG = {
    port:4723,
    specs:["./features/**/*.feature"],
    exlude:[],
    maxInstances:1,
    capabilities:[],
    loglevel:"info",
    bail:0,
    waitForTimeout:60000,
    connectionRetryTimeout:120000,
    connectionRetryCount:2,
    path:"/wd/hub",
    services: [
        [
          "appium",
          {
            args: {
              address: "localhost",
              port: 4723,
            },
            logPath: "./",
          },
        ],
      ],
      framework: "cucumber",
      reporters: [
        [
          "cucumberjs-json",
          {
            jsonFolder: JSON_REPORT_DIR,
            language: "en",
          },
        ],
      ],
      cucumberOpts: {
        require: ["./features/step-definitions/**/*.js"],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: true,
        tagExpression: "not @WIP",
        timeout: 40000,
        ignoreUndefinedDefinitions: false,
        retry: 1,
      },
      // Cucumber Hooks
  beforeFeature: function (uri, feature) {
    console.log(`FEATURE: ${feature.name}`);
  },

  beforeScenario: function (world, context) {
    console.log(`\nSCENARIO: ${world.pickle.name}`);
  },

  beforeStep: function (step, scenario, context) {
    const os = driver.isAndroid ? 'Android' : 'iOS';
    console.log(`STEP ${os}: ${step.keyword}${step.text}`);
  },

  afterStep: function (step, scenario, result, context) {
    if (result.passed === false) {
      return driver.takeScreenshot().then(function (screenShot) {
        cucumberJson.attach(screenShot, "image/png");
      });
    }
  },

  afterFeature: async function (uri, feature) {
    driver.reset();
    await driver.pause(2000);
  },
};



if (process.env.OS && process.env.OS === 'Android') {
    SUITE_CONFIG.capabilities = [ANDROID_CAPABILITY];
    SUITE_CONFIG.cucumberOpts.tagExpression = "@Android and not @WIP";
  } else if (process.env.OS && process.env.OS === 'iOS') {
    let devFile = path.resolve(process.cwd(), "features/support/devices/" + process.env.device + ".json");
    let CUSTOM_CAPABILITIES;
    try {
      CUSTOM_CAPABILITIES = JSON.parse(fs.readFileSync(devFile, 'utf-8'));
    } catch (error) {
      console.error("THERE WAS AN ERROR WITH READING DATA FROM PROVIDED FILE, PlEASE CHECK IT. DEFAULT CAPABILITIES WILL BE USED.");
    }
    SUITE_CONFIG.capabilities = CUSTOM_CAPABILITIES ? [CUSTOM_CAPABILITIES] : [IOS_CAPABILITY];
    SUITE_CONFIG.cucumberOpts.tagExpression = "@iOS and not @WIP";
  } else {
    SUITE_CONFIG.capabilities = [ANDROID_CAPABILITY, IOS_CAPABILITY];
  }

  module.exports = {
    config: SUITE_CONFIG,
  };
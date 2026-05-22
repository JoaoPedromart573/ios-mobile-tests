require('dotenv').config()
export const config: WebdriverIO.Config = {

    //
    // ====================
    // Runner Configuration
    // ====================
    //
    runner: 'local',

    tsConfigPath: './tsconfig.json',

    //
    // BrowserStack
    //
    user: 'joaopedromartino_NJ4poS',
    key: 'Z9T546npxaWUFppzJ6SF',

    hostname: 'hub.browserstack.com',

    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],

    //
    // Specify Test Files
    //
 specs: [
    './test/specs/**/*.ts'
],

    exclude: [],

    //
    // Capabilities
    //
    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',   
  "appium:deviceName": "iPhone 15",
  "appium:platformVersion": "17",
  "appium:automationName": "XCUITest",
        'appium:app': 'bs://54e7334ee1f06ea30cf8caf212b0e2b6d04ed1ad'
        
    }],

    //
    // Test Configurations
    //
    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    //
    // Mocha
    //
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //
    // Hooks
    //
    before: async function () {

    }
}
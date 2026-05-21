exports.config = {
  runner: 'local',

  specs: ['./tests/**/*.js'],

  maxInstances: 1,

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 15',
    'appium:platformVersion': '17.0',
    'appium:automationName': 'XCUITest',
    'appium:app': './app/LojaEBAC-sim.app'
  }],

  logLevel: 'info',

  framework: 'mocha',

  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
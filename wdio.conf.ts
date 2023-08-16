export const config = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: 'tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './src/specs/**/*.ts'
    ],
    suites: {
        workflow: [
            './src/specs/f12.spec.ts',
            './src/specs/collectData.spec.ts'
        ],
    },
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
          }
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver', {
        args: ['--silent']
    }]],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}

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
    maxInstances: 10,
    capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome', // or "firefox", "microsoftedge", "safari"
        'goog:chromeOptions': {
            // Add the detach option to keep the browser open
            args: ['--detach']
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

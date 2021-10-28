import { Config, browser } from 'protractor';
import { jasmineAwesomeReport } from './helpers/jasmine-awesome';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    reporter();
    jasmineAwesomeReport();
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu'],
    },
  },
};

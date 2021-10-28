const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'reports',
  fileName: 'awesome',
  merge: true,
};

export const jasmineAwesomeReport = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};

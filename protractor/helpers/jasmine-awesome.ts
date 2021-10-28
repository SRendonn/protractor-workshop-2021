const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true,
};

export const jasmineAwesomeReport = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};

const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true,
};

export const reporter = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};

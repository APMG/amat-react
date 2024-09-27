module.exports = {
  verbose: false,
  setupFiles: ['jest-prop-type-error', 'babel-polyfill'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  watchPathIgnorePatterns: ['node_modules', 'coverage', 'dist'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 75,
      functions: 95,
      lines: 90
    }
  }
};

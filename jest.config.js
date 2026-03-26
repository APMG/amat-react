module.exports = {
  verbose: false,
  setupFiles: ['jest-prop-type-error'],
  testEnvironment: 'jsdom',
  watchPathIgnorePatterns: ['node_modules', 'coverage', 'dist'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 75,
      functions: 95,
      lines: 90
    }
  },
  // Limit workers for CI environments to prevent memory issues
  maxWorkers: process.env.CI ? 1 : '50%'
};

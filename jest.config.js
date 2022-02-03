const path = require('path');

module.exports = {
  rootDir: './src',
  setupFilesAfterEnv: [
    '<rootDir>/../jest/setup.jest.js'
  ]
}

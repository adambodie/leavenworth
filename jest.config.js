// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/npm/",
    "<rootDir>/tests/__tests__/components/"
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  snapshotSerializers: [
    "jest-serializer-vue"
  ],
};

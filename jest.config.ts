module.exports = {

  roots: ['<rootDir>/src'],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!<rootDir>/**/protocols/**'
  ],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

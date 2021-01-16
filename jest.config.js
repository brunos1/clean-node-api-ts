module.exports = {

  roots: ['<rootDir>/src'],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/domain/**',
    '!<rootDir>/src/**/*-protocols.ts',
    '!<rootDir>/**/protocols/**',
    '!<rootDir>/src/main/**'
  ],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  testEnvironment: 'node',

  preset: '@shelf/jest-mongodb',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

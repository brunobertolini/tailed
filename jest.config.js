module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
};

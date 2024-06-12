module.exports = {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
    testEnvironment: 'jest-environment-jsdom',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        esModuleInterop: true, 
      },
    },
    setupFiles: ['./jest.setup.js']
  };
module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/src/**.(ts|tsx)',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['.mjs', 'ts', 'tsx', 'js', 'jsx', 'svg'],
    rootDir: '../../',
    roots: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
    },
};

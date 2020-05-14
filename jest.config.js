module.exports = {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    transformIgnorePatterns: ['/node_modules/'],
    snapshotSerializers: ['jest-emotion'],
};

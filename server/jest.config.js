module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        "\\.graphql$": "jest-raw-loader"
    },
    testMatch: [
        '**/test/**/*.test.(ts|js)'
    ],
    testEnvironment: 'node',
    moduleNameMapper: {
        "src(.*)$": "<rootDir>/src/$1",
    }
};
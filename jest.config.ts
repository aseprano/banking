// jest.config.ts
// tslint:disable-next-line: no-implicit-dependencies
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",
    roots: [
        "test",
    ],
    collectCoverageFrom: [
        "test/**/*.ts",
    ],
};

export default config;

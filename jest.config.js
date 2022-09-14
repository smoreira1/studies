const { pathsToModuleNameMapper } = require("ts-jest");
const { paths } = require("./tsconfig.json").compilerOptions;

// eslint-disable-next-line no-undef
globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: "tsconfig.spec.json",
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  roots: ["<rootDir>/src/"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
      useESM: true,
      stringifyContentPathRegex: "\\.(html|svg)$",
      tsconfig: "<rootDir>/tsconfig-esm.spec.json",
    },
  },
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  collectCoverage: true,
  coverageReporters: ["html"],
  coverageDirectory: "coverage/my-app",
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: "<rootDir>" }),
  resolver: "<rootDir>/jest.resolver.js",
};

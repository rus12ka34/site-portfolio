/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  rootDir: '../../',
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "mts",
    "cts",
    "tsx",
    "json",
    "node"
  ],
  roots: [
    "<rootDir>"
  ],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"]
};

export default config;

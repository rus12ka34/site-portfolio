/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,
  rootDir: '../../',
  moduleNameMapper: {
    '^@/app': '<rootDir>/src/1-app',
    '^@/pages': '<rootDir>/src/2-pages',
    '^@/widgets': '<rootDir>/src/3-widgets',
    '^@/features': '<rootDir>/src/4-features',
    '^@/entities': '<rootDir>/src/5-entities',
    '^@/shared': '<rootDir>/src/6-shared',
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/config/jest/SvgMock.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
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

// Jest setup file to fix React 19 compatibility issues with jest-expo
// This file patches the mockNativeModules before jest-expo's setup runs

// Get the mockNativeModules that jest-expo will use
const mockNativeModules = require('react-native/Libraries/BatchedBridge/NativeModules');

// Ensure UIManager exists and is an object (not undefined or null)
if (!mockNativeModules.UIManager || typeof mockNativeModules.UIManager !== 'object') {
  Object.defineProperty(mockNativeModules, 'UIManager', {
    value: {},
    writable: true,
    configurable: true,
    enumerable: true,
  });
}

// Ensure NativeUnimoduleProxy exists and has viewManagersMetadata
if (!mockNativeModules.NativeUnimoduleProxy || typeof mockNativeModules.NativeUnimoduleProxy !== 'object') {
  Object.defineProperty(mockNativeModules, 'NativeUnimoduleProxy', {
    value: {
      viewManagersMetadata: {},
    },
    writable: true,
    configurable: true,
    enumerable: true,
  });
}

// Ensure viewManagersMetadata is an object
if (!mockNativeModules.NativeUnimoduleProxy.viewManagersMetadata || typeof mockNativeModules.NativeUnimoduleProxy.viewManagersMetadata !== 'object') {
  mockNativeModules.NativeUnimoduleProxy.viewManagersMetadata = {};
}

// Mock AsyncStorage for Jest
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);


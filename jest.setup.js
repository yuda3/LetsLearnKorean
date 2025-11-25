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

// Suppress specific act() warnings that occur due to complex timer interactions
// in QuizScreen tests. These are known issues with testing async state updates
// combined with timers and animations.
const originalError = console.error;
console.error = (...args) => {
  // Suppress act() warnings related to state updates
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('act(...)') ||
      args[0].includes('AggregateError') ||
      args[0].includes('Warning: An update to') ||
      args[0].includes('was not wrapped in act'))
  ) {
    return;
  }
  originalError.call(console, ...args);
};


import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  // Uncomment the line below if you want to silence console logs in tests
  // log: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
};
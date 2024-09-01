import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Important: Do not import the real component here
// import MyComponent from '@components/PerplexityExamples/MyComponent';

describe('MyComponent', () => {
  it('renders mocked component', async () => {
    // Use vi.doMock before any imports that use the mocked module
    vi.doMock('@components/PerplexityExamples/MyComponent', () => ({
      default: vi.fn().mockImplementation(() => <div data-testid="mocked-component">Mocked Content</div>),
    }));

    // Import the component after mocking
    const { default: MyComponent } = await import('@components/PerplexityExamples/MyComponent');

    render(<MyComponent />);
    expect(screen.getByTestId('mocked-component')).toBeInTheDocument();
    expect(screen.getByText('Mocked Content')).toBeInTheDocument();
  });

  it('renders different mock for another test', async () => {
    vi.doMock('@components/PerplexityExamples/MyComponent', () => ({
      default: vi.fn().mockImplementation(() => <div data-testid="another-mock">Another Mock</div>),
    }));

    const { default: MyComponent } = await import('@components/PerplexityExamples/MyComponent');

    render(<MyComponent />);
    expect(screen.getByTestId('another-mock')).toBeInTheDocument();
    expect(screen.getByText('Another Mock')).toBeInTheDocument();
  });
});

/*

Key Points to Remember
Don't Import the Real Component at the Top:
Avoid importing the real component at the top of your test file. This can cause the real implementation to be loaded before the mock is applied.
Use vi.doMock Before Imports:
Place vi.doMock calls before any imports that use the mocked module.
Dynamic Import:
Use a dynamic import to get the mocked component after calling vi.doMock.
Reset Mocks Between Tests:
If you have multiple tests that use different mocks, you might need to reset the mocks between tests:
typescript
beforeEach(() => {
  vi.resetModules();
});

Asynchronous Tests:
When using dynamic imports, your tests become asynchronous. Use async/await in your test functions.
Check File Paths:
Ensure the path in vi.doMock exactly matches the import path you would use for the real component.
Mock the Entire Module:
If your component has named exports, mock them all:
typescript
vi.doMock('../components/MyComponent', () => ({
  default: vi.fn().mockImplementation(() => <div>Mocked Default</div>),
  SomeNamedExport: vi.fn().mockImplementation(() => <div>Mocked Named Export</div>),
}));

Vitest Configuration:
Ensure your Vitest configuration allows for module mocking. In your vitest.config.ts:
typescript
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    mockReset: true,
  },
});

By following these guidelines, vi.doMock should correctly mock your component. If you're still experiencing issues, it might be worth checking for any global setup files or configurations that could be interfering with the mocking process.

*/

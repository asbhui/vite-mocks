// src/hooks/__tests__/useStore.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreProvider } from '../../contexts/StoreContext';
import { useStore } from '../useStore';

// Test component that uses the useStore hook
const TestComponent: React.FC = () => {
  const store = useStore();
  return <div>Email: {store.email}</div>;
};

describe('useStore', () => {
  it('provides access to the store', () => {
    render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>,
    );

    expect(screen.getByText('Email:')).toBeInTheDocument();
  });

  it('throws an error when used outside StoreProvider', () => {
    // Suppress console.error for this test
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow('useStore must be used within a StoreProvider');

    consoleError.mockRestore();
  });
});

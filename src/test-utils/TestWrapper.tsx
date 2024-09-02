// TestWrapper.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface TestWrapperProps {
  children: React.ReactNode;
  width: number;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children, width }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  // Mock the matchMedia function
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: width <= 600, // Adjust this value based on your breakpoint
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated, but might be used by some versions of MUI
    removeListener: vi.fn(), // Deprecated, but might be used by some versions of MUI
    addEventListener: vi.fn(), // Add this
    removeEventListener: vi.fn(), // Add this
    dispatchEvent: vi.fn(), // Add this
  }));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default TestWrapper;

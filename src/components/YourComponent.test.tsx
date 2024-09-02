import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import YourComponent from './YourComponent';
import TestWrapper from '../test-utils/TestWrapper';

describe('YourComponent', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('renders small screen layout when screen width is less than or equal to 600px', () => {
    render(
      <TestWrapper width={600}>
        <YourComponent />
      </TestWrapper>,
    );
    expect(screen.getByText('This is a small screen layout')).toBeInTheDocument();
  });

  it('renders large screen layout when screen width is greater than 600px', () => {
    render(
      <TestWrapper width={601}>
        <YourComponent />
      </TestWrapper>,
    );
    expect(screen.getByText('This is a large screen layout')).toBeInTheDocument();
  });
});

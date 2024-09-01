import { render, screen } from '@testing-library/react';
import MyComponent from '@components/PerplexityExamples/MyComponent';

vi.mock('@components/PerplexityExamples/MyComponent');

describe('Manual Mocking', () => {
  it('should first', () => {
    render(<MyComponent />);
    expect(screen.getByText('Mocked Component')).toBeInTheDocument();
  });
});

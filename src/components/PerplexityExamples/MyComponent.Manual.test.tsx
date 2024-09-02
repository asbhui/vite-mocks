import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

vi.mock('./MyComponent');

describe('Manual Mocking', () => {
  it('should first', () => {
    render(<MyComponent />);
    expect(screen.getByText('Mocked Component')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent test', () => {
  it('should my component render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('My Component')).toBeInTheDocument();
  });
});

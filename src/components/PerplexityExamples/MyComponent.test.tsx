import { render, screen } from '../../test-utils/vitest.setup';
import MyComponent from './MyComponent';

describe('MyComponent test', () => {
  it('should my component render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('My Component')).toBeInTheDocument();
  });
});

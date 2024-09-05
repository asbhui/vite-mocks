import { render, screen } from '../test-utils/vitest.setup';
import YourComponent from './YourComponent';
import ScreenSizeWrapper from '../test-utils/TestWrapper';

describe('YourComponent', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('renders small screen layout when screen width is less than or equal to 600px', () => {
    render(
      <ScreenSizeWrapper width={600}>
        <YourComponent />
      </ScreenSizeWrapper>,
    );
    expect(screen.getByText('This is a small screen layout')).toBeInTheDocument();
  });

  it('renders large screen layout when screen width is greater than 600px', () => {
    render(
      <ScreenSizeWrapper width={601}>
        <YourComponent />
      </ScreenSizeWrapper>,
    );
    expect(screen.getByText('This is a large screen layout')).toBeInTheDocument();
  });
});

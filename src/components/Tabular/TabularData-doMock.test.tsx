import { render, screen } from '../../test-utils/vitest.setup';
import userEvent from '@testing-library/user-event';
import { Button, Typography } from '@mui/material';

describe('TabularData Component', () => {
  it('renders TabularData with mocked BasicCard', async () => {
    const clickToLearnMore = vi.fn();

    // Mock the BasicCard component
    vi.doMock('./BasicCard', () => ({
      default: vi.fn().mockImplementation(() => {
        return (
          <>
            <Typography data-testid="mock-basic-chart">Mocked BasicCard</Typography>
            <Button data-testid="manually-mocked-basic-card-button" onClick={clickToLearnMore}>
              Click me
            </Button>
          </>
        );
      }),
    }));

    // Import TabularData after mocking BasicCard
    const { TabularData } = await import('./TabularData');

    // Render the TabularData component
    render(<TabularData />);

    // Verify that the mocked BasicCard is rendered
    expect(screen.getByTestId('mock-basic-chart')).toBeInTheDocument();
    expect(screen.getByText('Mocked BasicCard')).toBeInTheDocument();

    // Verify that the clickToLearnMore function is called
    await userEvent.click(screen.getByText('Click me'));
    expect(clickToLearnMore).toHaveBeenCalled();
  });
});

import { render, screen } from '../../test-utils/vitest.setup';
import { TabularData } from './TabularData';
import userEvent from '@testing-library/user-event';

describe('TabularData', async () => {
  it('renders tabular data and click to learn more', async () => {
    render(<TabularData />);
    const user = userEvent.setup();
    const consoleInfoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});

    await user.click(screen.getByRole('button', { name: 'Learn More' }));

    // Assert that console.log was called with the expected message
    expect(consoleInfoSpy).toHaveBeenCalledWith('You clicked the Chip.');
  });
});

import { render, screen } from '../../test-utils/vitest.setup';
import { TabularData } from './TabularData';
import userEvent from '@testing-library/user-event';

const handleClick = vi.fn().mockImplementation(() => {});
// In-file mock component example
vi.mock('./BasicCard', () => ({
  default: () => {
    return (
      <>
        <div data-testid="mocked-basic-card">Mocked BasicCard</div>
        <button data-testid="manually-mocked-basic-card-button" onClick={handleClick}>
          Click me
        </button>
      </>
    );
  },
}));

describe('TabularData', () => {
  it('renders the component with in file mocked BasicCard component', async () => {
    render(<TabularData />);
    const mockedCard = screen.getByTestId('mocked-basic-card');
    expect(mockedCard).toHaveTextContent('Mocked BasicCard');
    const mockedButton = screen.getByTestId('manually-mocked-basic-card-button');
    await userEvent.click(mockedButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

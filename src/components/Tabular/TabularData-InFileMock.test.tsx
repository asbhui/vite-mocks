import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TabularData } from '@components/Tabular/TabularData';

// In-file mock component example
vi.mock('@components/Tabular/BasicCard', () => ({
  __esModule: true,
  default: () => {
    return (
      <>
        <div data-testid="mocked-basic-card">Mocked BasicCard</div>
      </>
    );
  },
}));

describe('TabularData', () => {
  it('renders the component with in file mocked BasicCard component', () => {
    render(<TabularData />);
    const mockedCard = screen.getByTestId('mocked-basic-card');
    expect(mockedCard).toHaveTextContent('Mocked BasicCard');
  });
});

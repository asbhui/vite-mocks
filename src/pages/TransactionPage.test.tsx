import { render } from '@testing-library/react';
import { TransactionPage } from './TransactionPage';
import { StoreProvider } from '../contexts/StoreContext';

describe('TransactionPage test', () => {
  it('should render transaction page', () => {
    const { container } = render(
      <StoreProvider>
        <TransactionPage />
      </StoreProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});

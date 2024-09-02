import { render, screen, act } from '@testing-library/react';
import { rootStore } from '../../../stores/RootStore';
import { StoreProvider } from '../../../contexts/StoreContext';

// vi.mock('../../../services/api', async (importOriginal) => ({
//   ...(await importOriginal<typeof import('../../../services/api')>()),
//   fetchTransactionApiCall: vi.fn().mockResolvedValue({
//     id: '4872',
//     amount: 101.24,
//     date: '2023-09-02',
//     status: 'pending',
//   }),
// }));

// vi.mock('../../../services/api');

// import { fetchTransactionApiCall } from '../../../services/api';

describe.skip('TransactionDisplay', () => {
  it('displays transaction data after fetching', async () => {
    // Dynamically import the component to ensure the mock is applied
    const { TransactionDisplay } = await import('../TransactionDisplay');

    await act(async () => {
      render(
        <StoreProvider>
          <TransactionDisplay />
        </StoreProvider>,
      );
      // Trigger the fetchTransaction action
      await rootStore.fetchTransaction();
    });

    // Assert that the transaction data is displayed
    expect(screen.getByText('Transaction Details')).toBeInTheDocument();
    expect(screen.getByText('123789')).toBeInTheDocument();
    expect(screen.getByText('101.24')).toBeInTheDocument();
    expect(screen.getByText('2023-09-02')).toBeInTheDocument();
    expect(screen.getByText('pending')).toBeInTheDocument();
  });
});

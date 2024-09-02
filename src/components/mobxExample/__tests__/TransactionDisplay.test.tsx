import { render, screen } from '@testing-library/react';
import { rootStore } from '../../../stores/RootStore';
import { StoreProvider } from '../../../contexts/StoreContext';
import { TransactionDisplay } from '../TransactionDisplay';

import { runInAction } from 'mobx';
import { unprotect } from 'mobx-state-tree';

describe('TransactionDisplay', () => {
  it('displays loading state', () => {
    // Wrap all changes with runInAction
    runInAction(() => {
      unprotect(rootStore);
      rootStore.isLoading = true;
    });

    render(
      <StoreProvider>
        <TransactionDisplay />
      </StoreProvider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    // Wrap all changes with runInAction
    runInAction(() => {
      unprotect(rootStore);
      rootStore.isLoading = false;
      rootStore.error = 'Error fetching data';
    });

    render(
      <StoreProvider>
        <TransactionDisplay />
      </StoreProvider>,
    );

    expect(screen.getByText('Error: Error fetching data')).toBeInTheDocument();
  });

  it('displays transaction data', () => {
    // Wrap all changes with runInAction
    runInAction(() => {
      unprotect(rootStore);
      rootStore.isLoading = false;
      rootStore.error = '';
      rootStore.transactionData = {
        id: '123',
        amount: 100,
        date: '2023-09-02',
        status: 'completed',
      };
    });

    render(
      <StoreProvider>
        <TransactionDisplay />
      </StoreProvider>,
    );

    expect(screen.getByText('Transaction Details')).toBeInTheDocument();
    expect(screen.getByText('ID: 123')).toBeInTheDocument();
    expect(screen.getByText('Amount: $100')).toBeInTheDocument();
    expect(screen.getByText('Date: 2023-09-02')).toBeInTheDocument();
    expect(screen.getByText('Status: completed')).toBeInTheDocument();
  });
});

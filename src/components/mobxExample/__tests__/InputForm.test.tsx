import { render, screen, waitFor } from '@testing-library/react';
import { StoreProvider } from '../../../contexts/StoreContext';
import { InputForm } from '../InputForm';
import { rootStore } from '../../../stores/RootStore';
import userEvent from '@testing-library/user-event';
import { unprotect } from 'mobx-state-tree';

describe('InputForm', () => {
  beforeEach(() => {
    rootStore.resetForm();
    render(
      <StoreProvider>
        <InputForm />
      </StoreProvider>,
    );
  });
  it('renders input fields and submit button', () => {
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Transaction ID')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /fetch transaction/i })).toBeInTheDocument();
  });

  it('updates store on input change', async () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const transactionIdInput = screen.getByPlaceholderText('Transaction ID');
    const user = userEvent.setup();

    await user.type(emailInput, '{selectall}test@example.com');
    await user.type(transactionIdInput, '{selectall}123456');
    await user.tab();

    expect(rootStore.email).toBe('test@example.com');
    expect(rootStore.transactionId).toBe('123456');
  });

  it('calls fetchTransaction on form submit', async () => {
    unprotect(rootStore);
    const mockFetchTransaction = vi.spyOn(rootStore, 'fetchTransaction');

    const emailInput = screen.getByPlaceholderText('Email');
    const transactionIdInput = screen.getByPlaceholderText('Transaction ID');
    const user = userEvent.setup();

    await user.type(emailInput, '{selectall}testing@example.com');
    await user.type(transactionIdInput, '{selectall}654321');
    await user.tab();

    const submitButton = screen.getByRole('button', { name: /fetch transaction/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockFetchTransaction).toHaveBeenCalled();
    });

    // Restore the original implementation
    mockFetchTransaction.mockRestore();
  });
});

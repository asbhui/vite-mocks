import { StoreProvider } from '../../../contexts/StoreContext';
import { InputForm } from '../InputForm';
import { rootStore } from '../../../stores/RootStore';
import userEvent from '@testing-library/user-event';
import { unprotect } from 'mobx-state-tree';
import i18nTest from '../../../services/locales';
import { I18nextProvider } from 'react-i18next';
import { render, screen, waitFor } from '../../../test-utils/vitest.setup';

describe('InputForm', () => {
  beforeEach(() => {
    rootStore.resetForm();
    render(
      <StoreProvider>
        <I18nextProvider i18n={i18nTest}>
          <InputForm />
        </I18nextProvider>
      </StoreProvider>,
    );
  });
  it('renders input fields and submit button', () => {
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Transaction ID')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /lookup/i })).toBeInTheDocument();
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

    const submitButton = screen.getByRole('button', { name: /lookup/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockFetchTransaction).toHaveBeenCalled();
    });

    // Restore the original implementation
    mockFetchTransaction.mockRestore();
  });
});

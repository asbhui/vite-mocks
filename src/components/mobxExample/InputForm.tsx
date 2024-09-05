import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';

export const InputForm = observer(() => {
  const { email, transactionId, setEmail, setTransactionId, fetchTransaction } = useStore();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTransaction();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={2}>
        <Stack direction={'row'} gap={2}>
          {t('transactionPage.form.email')}:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('transactionPage.form.emailPlaceholder')}
            required
          />
        </Stack>
        <Stack direction={'row'} gap={2}>
          {t('transactionPage.form.transactionId')}:
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder={t('transactionPage.form.transactionIdPlaceholder')}
            required
          />
        </Stack>

        <button type="submit">{t('transactionPage.form.button')}</button>
      </Stack>
    </form>
  );
});

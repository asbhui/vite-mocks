import { observer } from 'mobx-react-lite';
import { InputForm } from '../components/mobxExample/InputForm';

import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import { TransactionDisplay } from '../components/mobxExample/TransactionDisplay';

export const TransactionPage = observer(() => {
  const { t } = useTranslation();
  return (
    <Stack gap={2} alignItems={'center'}>
      <Typography variant="h2">{t('transactionPage.title')}</Typography>
      <Stack direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
        <InputForm />
        <TransactionDisplay />
      </Stack>
    </Stack>
  );
});

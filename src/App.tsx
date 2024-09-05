import { StoreProvider } from './contexts/StoreContext';
import { TransactionPage } from './pages/TransactionPage';

import { Stack } from '@mui/material';
import MyComponent from './components/PerplexityExamples/MyComponent';
import YourComponent from './components/YourComponent';
import { LocaleProvider } from './contexts/LocaleProvider';

function App() {
  return (
    <StoreProvider>
      <LocaleProvider>
        <Stack
          gap={5}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90vw', height: '90vh' }}
        >
          <TransactionPage />
          <MyComponent />
          <YourComponent />
        </Stack>
      </LocaleProvider>
    </StoreProvider>
  );
}

export default App;

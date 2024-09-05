import { StoreProvider } from './contexts/StoreContext';
import { TransactionPage } from './pages/TransactionPage';

import { Stack } from '@mui/material';
import MyComponent from './components/PerplexityExamples/MyComponent';
import YourComponent from './components/YourComponent';
import { LocalizationProvider } from './contexts/LocalizationProvider';

function App() {
  return (
    <StoreProvider>
      <LocalizationProvider>
        <Stack
          gap={5}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90vw', height: '90vh' }}
        >
          <TransactionPage />
          <MyComponent />
          <YourComponent />
        </Stack>
      </LocalizationProvider>
    </StoreProvider>
  );
}

export default App;

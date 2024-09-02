import { StoreProvider } from './contexts/StoreContext';
import { TransactionPage } from './pages/TransactionPage';

function App() {
  return (
    <StoreProvider>
      <TransactionPage />
    </StoreProvider>
  );
}

export default App;

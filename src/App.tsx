import { StoreProvider } from './contexts/StoreContext';
import { TransactionPage } from './pages/TransactionPage';
import YourComponent from './components/YourComponent';

function App() {
  return (
    <StoreProvider>
      <TransactionPage />
      <YourComponent />
    </StoreProvider>
  );
}

export default App;

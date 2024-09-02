import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';

export const TransactionDisplay = observer(() => {
  const { transactionData, isLoading, error } = useStore();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!transactionData) return null;

  return (
    <div>
      <h2>Transaction Details</h2>
      <p>ID: {transactionData.id}</p>
      <p>Amount: ${transactionData.amount}</p>
      <p>Date: {transactionData.date}</p>
      <p>Status: {transactionData.status}</p>
    </div>
  );
});

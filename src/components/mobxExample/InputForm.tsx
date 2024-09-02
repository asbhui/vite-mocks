import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';

export const InputForm = observer(() => {
  const { email, transactionId, setEmail, setTransactionId, fetchTransaction } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTransaction();
  };

  return (
    <form onSubmit={handleSubmit}>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <br />
      Transaction ID:
      <input
        type="text"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        placeholder="Transaction ID"
        required
      />
      <br />
      <button type="submit">Fetch Transaction</button>
    </form>
  );
});

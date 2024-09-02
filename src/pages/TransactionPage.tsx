import { observer } from 'mobx-react-lite';
import { InputForm } from '../components/mobxExample/InputForm';
import { TransactionDisplay } from '../components/mobxExample/TransactionDisplay';

export const TransactionPage = observer(() => {
  return (
    <div>
      <h1>Transaction Lookup</h1>
      <InputForm />
      <TransactionDisplay />
    </div>
  );
});

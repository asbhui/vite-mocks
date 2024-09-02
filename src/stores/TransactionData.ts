import { types } from 'mobx-state-tree';

const TransactionData = types.model('TransactionData', {
  id: types.string,
  amount: types.number,
  date: types.string,
  status: types.string,
});
export default TransactionData;
export type TransactionDataType = typeof TransactionData;

import { types, flow } from 'mobx-state-tree';

import TransactionData from './TransactionData';
import { fetchTransactionApiCall, TransactionRes } from '../services/network/transactions';

const RootStore = types
  .model('RootStore', {
    email: types.optional(types.string, ''),
    transactionId: types.optional(types.string, ''),
    transactionData: types.maybe(TransactionData),
    isLoading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    setEmail(email: string) {
      self.email = email;
    },
    setTransactionId(id: string) {
      self.transactionId = id;
    },
    fetchTransaction: flow(function* fetchTransaction() {
      console.log('calling api call with email and transactionId', self.email, self.transactionId);
      self.isLoading = true;
      self.error = '';
      try {
        const data = yield fetchTransactionApiCall({ email: self.email, transactionId: self.transactionId });
        console.log('fetchTransactionApiCall data', data);
        const filteredData = data?.find((item: TransactionRes) => item.id === self.transactionId);

        self.transactionData = TransactionData.create(filteredData);
      } catch (error) {
        if (error instanceof Error) {
          self.error = error.message;
        } else {
          // Handle other types of errors
        }
      } finally {
        self.isLoading = false;
      }
    }),
    resetForm() {
      self.email = '';
      self.transactionId = '';
      self.transactionData = undefined;
      self.isLoading = false;
      self.error = '';
    },
  }));

export const rootStore = RootStore.create();

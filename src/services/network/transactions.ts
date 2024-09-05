import config from '../config';
import axiosInstance from './axiosInterceptors';

export type TransactionRes = {
  id: string;
  amount: number;
  date: string;
  status: string;
};

export type TransactionReq = {
  email: string;
  transactionId: string;
};

export const fetchTransactionApiCall = async ({ email, transactionId }: TransactionReq) => {
  return await axiosInstance
    .get<TransactionRes[]>(config.transactions, {
      params: { email, transactionId },
    })
    .then((response) => response.data);
};

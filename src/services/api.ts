import axios from 'axios';

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

const axiosInstance = axios.create();

export const fetchTransactionApiCall = async ({ email, transactionId }: TransactionReq) => {
  const server = `${import.meta.env.VITE_SOME_SERVER}/transactions`;
  return await axiosInstance
    .get<TransactionRes[]>(server, {
      params: { email, transactionId },
    })
    .then((response) => response.data);
};

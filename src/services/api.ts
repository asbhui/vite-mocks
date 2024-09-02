import axios from 'axios';

interface TransactionData {
  id: string;
  amount: number;
  date: string;
  status: string;
}

type TransactionReq = {
  email: string;
  transactionId: string;
};

const axiosInstance = axios.create();

export const fetchTransactionApiCall = async ({ email, transactionId }: TransactionReq) => {
  const server = `${import.meta.env.VITE_SOME_SERVER}/transaction`;
  return await axiosInstance
    .get<TransactionData>(server, {
      params: { email, transactionId },
    })
    .then((response) => response.data);
};

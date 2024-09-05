export const fetchTransactionApiCall = vi.fn().mockResolvedValue([
  {
    id: '784512',
    amount: 191.24,
    date: '2023-09-02',
    status: 'pending',
  },
]);

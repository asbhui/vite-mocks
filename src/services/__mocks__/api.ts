// src/services/__mocks__/api.ts
export const fetchTransactionApiCall = vi.fn().mockResolvedValue({
  id: '123789',
  amount: 101.24,
  date: '2023-09-02',
  status: 'pending',
});

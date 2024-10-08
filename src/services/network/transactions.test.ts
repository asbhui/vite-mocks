import { fetchTransactionApiCall } from './transactions';

describe('transaction lookup service', async () => {
  it('should make an api call to transaction service', async () => {
    const data = await fetchTransactionApiCall({ email: 'test@test.com', transactionId: '123789' });
    expect(data).toEqual({
      id: '123789',
      amount: 101.24,
      date: expect.any(String),
      status: 'pending',
    });
  });
});

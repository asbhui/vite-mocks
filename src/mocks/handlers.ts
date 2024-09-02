import { http, HttpResponse } from 'msw';

const baseServer = import.meta.env.VITE_SOME_SERVER;

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${baseServer}/transaction`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: '123789',
      amount: 101.24,
      date: '2023-09-02',
      status: 'pending',
    });
  }),
];

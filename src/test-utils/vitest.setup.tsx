import '@testing-library/jest-dom';
import { rootStore } from '../stores/RootStore';
import { server } from '../mocks/server';

beforeAll(() => {
  rootStore.resetForm();
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

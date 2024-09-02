import { server } from './src/mocks/server';
import { rootStore } from './src/stores/RootStore';
import '@testing-library/jest-dom';

beforeAll(() => {
  rootStore.resetForm();
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

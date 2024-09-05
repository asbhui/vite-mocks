import '@testing-library/jest-dom';
import { rootStore } from '../stores/RootStore';
import { server } from '../mocks/server';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LocaleProvider } from '../contexts/LocaleProvider';

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

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: LocaleProvider, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };

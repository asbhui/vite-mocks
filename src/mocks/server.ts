import { RequestHandler } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from './handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);

/**
 * Add a new handler without wiping the existing ones. Useful when you only care about the response of one endpoint but you don't want other calls to break.
 */
export const overrideServerHandlers = (...handlerOverrides: RequestHandler[]): void => {
  server.resetHandlers(...handlerOverrides, ...handlers);
};

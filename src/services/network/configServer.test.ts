import { http, HttpResponse } from 'msw';
import { overrideServerHandlers } from '../../mocks/server';
import { fetchConfigServer } from './configServer';
import { ConfigServerResult } from './types';
import config from '../config';

describe('Config server', () => {
  it('fetches the remote config and updates the state', async () => {
    const expectedResult: ConfigServerResult = {
      featureFlags: [
        { isActive: true, name: 'showVersionNumber' },
        { isActive: true, name: 'showFloatingMoon' },
      ],
      name: 'sample-react-app-mock-json',
      version: 'commit-ID',
    };

    const result = await fetchConfigServer();

    expect(result).toEqual(expectedResult);
  });

  it('handles the error when fetching the remote config', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error');
    overrideServerHandlers(
      http.get(config.configServer, () => {
        return HttpResponse.json({ status: 500 });
      }),
    );

    const expectedResult: ConfigServerResult = {
      featureFlags: [],
      name: '',
      version: '',
    };

    const result = await fetchConfigServer();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching remote config', expect.any(Error));
    expect(result).toEqual(expectedResult);
  });
});

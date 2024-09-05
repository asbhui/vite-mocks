import { http, HttpResponse } from 'msw';
import config from '../services/config';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(config.transactions, async ({ request }) => {
    // Get the URL as a string
    const urlString = request.url;

    // Create a URL object
    const url = new URL(urlString);

    // Access query parameters
    // const email = url.searchParams.get('email');
    const transactionId = url.searchParams.get('transactionId');

    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: transactionId,
      amount: 101.24,
      date: '2023-09-02',
      status: 'pending',
    });
  }),

  http.get(config.configServer, () => {
    return HttpResponse.json({
      name: 'sample-react-app-mock-json',
      profiles: ['env'],
      label: null,
      version: 'commit-ID',
      state: null,
      propertySources: [
        {
          name: 'https://github.com/xyxProfile/yaml-config-fe/sample-react-app-mock-json.yaml',
          source: {
            configKey: 'configValue',
            'featureFlags[0].isActive': true,
            'featureFlags[0].name': 'showVersionNumber',
            'featureFlags[1].isActive': true,
            'featureFlags[1].name': 'showFloatingMoon',
          },
        },
      ],
    });
  }),
];

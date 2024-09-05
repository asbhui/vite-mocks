import { Flag } from 'react-feature-flags';
import { ConfigServerResponse, ConfigServerResult } from './types';
import axiosInstance from './axiosInterceptors';
import config from '../config';

const mapFeatureFlags = (source: Record<string, unknown>): Flag[] => {
  const featureFlagNameRegex = /featureFlags\[(\d+)\]\.name/g;
  const featureFlags = Object.keys(source)
    .filter((key) => featureFlagNameRegex.test(key))
    .map((key) => {
      return {
        isActive: !!source[key.replace(featureFlagNameRegex, 'featureFlags[$1].isActive')],
        name: source[key] as string,
      };
    });
  return featureFlags;
};

export const fetchConfigServer = async (): Promise<ConfigServerResult> => {
  try {
    const { name, version, propertySources } = await getRemoteConfig();
    const featureFlags = mapFeatureFlags(propertySources[0].source);
    const result = {
      featureFlags,
      name,
      version,
    };

    return result;
  } catch (err) {
    console.error('Error fetching remote config', err);
  }
  return {
    featureFlags: [],
    name: '',
    version: '',
  };
};

export const getRemoteConfig = (): Promise<ConfigServerResponse> =>
  axiosInstance.get<ConfigServerResponse>(config.configServer).then((res) => res.data);

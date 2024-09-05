import { Flag } from 'react-feature-flags';

export interface PropertySources {
  name: string;
  source: Record<string, unknown>;
}

export interface ConfigServerResponse {
  label: string;
  name: string;
  profiles: string[];
  propertySources: PropertySources[];
  state: string;
  version: string;
}

export interface ConfigServerResult {
  featureFlags: Flag[];
  name: string;
  version: string;
}

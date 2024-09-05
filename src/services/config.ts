type Config = {
  apiGateway: string;
  configServer: string;
  transactions: string;
};

const config: Config = {
  /**
   * The URL of the API gateway
   */
  apiGateway: import.meta.env.VITE_API_GATEWAY,
  /**
   * The URL of the config server
   */
  configServer: import.meta.env.VITE_CONFIG_SERVER,
  /**
   * The URL of the transactions server
   */
  transactions: import.meta.env.VITE_TRANSACTIONS,
};

export default config;
